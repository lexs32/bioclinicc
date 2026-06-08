import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import app from './build/server/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Content types mapping for static files
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

export default async ({ req, res, log, error }) => {
  const requestPath = req.path;
  log(`Request path: ${requestPath}, method: ${req.method}`);

  // 1. Serve static files from build/client
  const normalizedPath = path.normalize(requestPath).replace(/^(\.\.[\/\\])+/, '');
  const localFilePath = path.join(__dirname, 'build', 'client', normalizedPath === '/' ? 'index.html' : normalizedPath);

  if (fs.existsSync(localFilePath) && fs.statSync(localFilePath).isFile()) {
    log(`Serving static file: ${localFilePath}`);
    const ext = path.extname(localFilePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    const content = fs.readFileSync(localFilePath);
    
    return res.send(content, 200, {
      'content-type': contentType,
      'cache-control': 'public, max-age=31536000, immutable',
    });
  }

  // 2. Pass request to Hono / React Router
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['host'] || 'localhost';
    const url = `${protocol}://${host}${req.path}${req.queryString ? `?${req.queryString}` : ''}`;
    
    // Construct headers
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value !== undefined) {
        headers.set(key, String(value));
      }
    }

    // Set body if present
    let body = undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      body = typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;
    }

    const fetchRequest = new Request(url, {
      method: req.method,
      headers,
      body,
    });

    const fetchResponse = await app.request(fetchRequest);
    const responseHeaders = {};
    fetchResponse.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    const responseText = await fetchResponse.text();
    return res.send(responseText, fetchResponse.status, responseHeaders);
  } catch (err) {
    error(`Error handling request: ${err.message}`);
    return res.send(`Internal Server Error: ${err.message}`, 500);
  }
};
