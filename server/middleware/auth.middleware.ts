import { Request, Response, NextFunction } from 'express';

export interface AuthRequest extends Request {
  userId?: string;
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction): void {
  const apiKey = req.headers['x-api-key'] as string;

  if (!apiKey) {
    res.status(401).json({ error: 'API key required' });
    return;
  }

  if (apiKey !== process.env.API_KEY) {
    res.status(403).json({ error: 'Invalid API key' });
    return;
  }

  req.userId = 'user_from_key';
  next();
}

export function optionalAuth(req: AuthRequest, res: Response, next: NextFunction): void {
  const apiKey = req.headers['x-api-key'] as string;

  if (apiKey && apiKey === process.env.API_KEY) {
    req.userId = 'user_from_key';
  }

  next();
}
