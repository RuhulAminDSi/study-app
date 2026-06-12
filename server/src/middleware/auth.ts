import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config.js";
import type { AdminUser } from "../types.js";

export interface AuthRequest extends Request {
  user?: Pick<AdminUser, "id" | "username" | "role">;
}

export function authRequired(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ error: "No token provided" });
    return;
  }

  try {
    const payload = jwt.verify(header.slice(7), config.jwtSecret) as Pick<
      AdminUser,
      "id" | "username" | "role"
    >;
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}
