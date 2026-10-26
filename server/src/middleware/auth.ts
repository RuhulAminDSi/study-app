import type { Request, Response, NextFunction } from "express";
import { verifyToken, type AdminClaims, type AdminRole, type CandidateClaims } from "../auth/tokens.js";
import { pool } from "../db/pool.js";
import { config } from "../config.js";

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

export interface ReaderRequest extends Request {
  reader?: AdminClaims | CandidateClaims;
}

/**
 * Study content: a signed-in candidate, or an admin previewing the portal. A candidate's account must
 * still exist and be active, so deactivating or deleting it takes effect at once, not when the token expires.
 */
export async function readerRequired(req: ReaderRequest, res: Response, next: NextFunction) {
  const token = bearerToken(req);
  const claims = token ? verifyToken(token) : null;
  if (!claims) { res.status(401).json({ error: "Sign in to read the lessons.", code: "sign_in_required" }); return; }
  if (claims.kind === "candidate") {
    try {
      const { rows } = await pool.query("SELECT is_active FROM candidates WHERE id = $1", [claims.id]);
      if (!rows[0]?.is_active) {
        res.status(401).json({ error: "This account is not available. Sign in again.", code: "account_inactive" });
        return;
      }
    } catch (err) {
      next(err);
      return;
    }
  }
  req.reader = claims;
  next();
}

/** A candidate whose account still exists and is active (exams write data, so a revoked account stops at once). */
export function activeCandidateRequired(req: CandidateRequest, res: Response, next: NextFunction) {
  candidateRequired(req, res, async () => {
    try {
      const { rows } = await pool.query("SELECT is_active FROM candidates WHERE id = $1", [req.candidate!.id]);
      if (!rows[0]?.is_active) {
        res.status(401).json({ error: "This account is not available. Sign in again.", code: "account_inactive" });
        return;
      }
      next();
    } catch (err) {
      next(err);
    }
  });
}

/** Preview candidates live on a reserved domain, so no real sign-up can take or collide with their address. */
export const PREVIEW_EMAIL_DOMAIN = "admin-preview.studypath.invalid";

/**
 * The exam routes: a candidate (as activeCandidateRequired), or, when config.examAdminPreview is on (development by
 * default), an admin testing the exams. Attempts belong to a candidate, so each admin gets a linked preview candidate,
 * created on first use. It cannot sign in (its password hash is not a bcrypt hash).
 */
export function examTakerRequired(req: CandidateRequest, res: Response, next: NextFunction) {
  const token = bearerToken(req);
  const claims = token ? verifyToken(token) : null;
  if (claims?.kind !== "admin" || !config.examAdminPreview) { activeCandidateRequired(req, res, next); return; }
  const email = `admin-${claims.id}@${PREVIEW_EMAIL_DOMAIN}`;
  pool
    .query(
      `INSERT INTO candidates (full_name, email, password_hash, preferred_language)
       VALUES ($1, $2, '!preview', 'en')
       ON CONFLICT ((lower(email))) DO UPDATE SET full_name = EXCLUDED.full_name
       RETURNING id, is_active`,
      [`${claims.username} (admin preview)`.slice(0, 150), email],
    )
    .then(({ rows }) => {
      if (!rows[0].is_active) {
        res.status(401).json({ error: "This account is not available. Sign in again.", code: "account_inactive" });
        return;
      }
      req.candidate = { kind: "candidate", id: rows[0].id, email };
      next();
    })
    .catch(next);
}

/** Limits an admin route to some roles (use after adminRequired). Editors, for example, manage content only. */
export function adminRoleRequired(...roles: AdminRole[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({ error: "Your admin role cannot do this.", code: "forbidden" });
      return;
    }
    next();
  };
}
