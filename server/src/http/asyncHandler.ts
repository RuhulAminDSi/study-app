import type { Request, Response, NextFunction, RequestHandler } from "express";

/** Wraps an async route so a rejected promise reaches the Express error handler instead of crashing. */
export function asyncHandler<Req extends Request = Request>(
  fn: (req: Req, res: Response, next: NextFunction) => Promise<unknown>,
): RequestHandler {
  return (req, res, next) => {
    fn(req as Req, res, next).catch(next);
  };
}
