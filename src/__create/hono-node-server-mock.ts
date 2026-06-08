export function serve(options: any, callback: any) {
  console.log("Mock @hono/node-server serve called (no-op for Vercel)");
  if (callback) {
    // Simulate server listening event
    setTimeout(() => {
      callback({ port: options.port || 3000 });
    }, 0);
  }
  return {
    close: (cb: any) => cb && cb(),
    on: () => {},
    once: () => {},
    emit: () => {},
    address: () => ({ port: options.port || 3000, address: '127.0.0.1', family: 'IPv4' })
  };
}
