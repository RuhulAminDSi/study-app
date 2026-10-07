import { pool } from "../db/pool.js";

/** Columns that are safe to return to the candidate (never password_hash). */
export const CANDIDATE_COLUMNS = "id, full_name, email, phone, target_post_id, preferred_language";

export interface PublicCandidate {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  targetPostId: string | null;
  preferredLanguage: "bn" | "en";
}

/** Shape of the candidate columns selected by CANDIDATE_COLUMNS. */
export interface CandidateRow {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  target_post_id: string | null;
  preferred_language: "bn" | "en";
}

export function toPublicCandidate(row: CandidateRow): PublicCandidate {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    phone: row.phone,
    targetPostId: row.target_post_id,
    preferredLanguage: row.preferred_language,
  };
}

export async function jobPostExists(id: string): Promise<boolean> {
  const { rowCount } = await pool.query("SELECT 1 FROM job_posts WHERE id = $1", [id]);
  return rowCount > 0;
}
