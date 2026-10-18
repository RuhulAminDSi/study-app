import jwt from "jsonwebtoken";
import { config } from "../config.js";

export type AdminRole = "super_admin" | "admin" | "editor";
export interface AdminClaims { kind: "admin"; id: string; username: string; role: AdminRole }
export interface CandidateClaims { kind: "candidate"; id: string; email: string }
export type TokenClaims = AdminClaims | CandidateClaims;

const TOKEN_LIFETIME_SECONDS = 7 * 24 * 60 * 60;

export function signToken(claims: TokenClaims): string {
  return jwt.sign(claims, config.jwtSecret, { expiresIn: TOKEN_LIFETIME_SECONDS });
}

/** Returns the claims of a valid, kind-tagged token, or null for anything else (expired, forged, pre-upgrade). */
export function verifyToken(token: string): TokenClaims | null {
  try {
    const payload = jwt.verify(token, config.jwtSecret) as Partial<TokenClaims>;
    if (payload.kind !== "admin" && payload.kind !== "candidate") return null;
    return payload as TokenClaims;
  } catch {
    return null;
  }
}
