export function serveStatic() {
  return async (c: any, next: any) => {
    await next();
  };
}
