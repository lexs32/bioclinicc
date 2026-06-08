import { handle } from 'hono/vercel';
import app from '../build/server/index.js';

console.log("API entrypoint loaded, app is:", !!app);

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const HEAD = handler;
export const OPTIONS = handler;
