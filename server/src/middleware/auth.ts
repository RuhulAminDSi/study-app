import type { Request, Response, NextFunction } from "express";
import { verifyToken, type AdminClaims, type CandidateClaims } from "../auth/tokens.js";

export interface AuthRequest extends Request {
  user?: AdminClaims;
}

export interface CandidateRequest extends Request {
  candidate?: CandidateClaims;
}

function bearerToken(req: Request): string | null {
  const header = req.headers.authorization;
  return header?.startsWith("Bearer ") ? header.slice(7) : null;
}

export function adminRequired(req: AuthRequest, res: Response, next: NextFunction) {
  const token = bearerToken(req);
  if (!token) { res.status(401).json({ error: "No token provided" }); return; }
  const claims = verifyToken(token);
  if (!claims) { res.status(401).json({ error: "Invalid or expired token" }); return; }
  if (claims.kind !== "admin") { res.status(403).json({ error: "Admin access required" }); return; }
  req.user = claims;
  next();
}

export function superAdminRequired(req: AuthRequest, res: Response, next: NextFunction) {
  adminRequired(req, res, () => {
    if (req.user?.role !== "super_admin") { res.status(403).json({ error: "Super admin access required" }); return; }
    next();
  });
}

export function candidateRequired(req: CandidateRequest, res: Response, next: NextFunction) {
  const token = bearerToken(req);
  if (!token) { res.status(401).json({ error: "Sign in required" }); return; }
  const claims = verifyToken(token);
  if (!claims) { res.status(401).json({ error: "Invalid or expired token" }); return; }
  if (claims.kind !== "candidate") { res.status(403).json({ error: "Candidate account required" }); return; }
  req.candidate = claims;
  next();
}
