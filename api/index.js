// Vercel entry point: every request is handled by the Express app in server.js.
// Data lives in /tmp on Vercel and resets to the demo seed when the function goes idle.
import app from '../server.js';
export default app;
