import { handle } from 'hono/vercel';
import { app } from '../build/server/index.js';

console.log("API entrypoint loaded, app is:", !!app);

const handler = handle(app);

export default (req, res) => {
  console.log("Vercel function invoked for path:", req.url);
  return handler(req, res);
};
