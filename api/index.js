import { handle } from 'hono/vercel';
import { app } from '../build/server/index.js';

export default handle(app);
