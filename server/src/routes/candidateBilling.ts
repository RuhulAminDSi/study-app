import { Router, type Response } from "express";
import { pool } from "../db/pool.js";
import { asyncHandler } from "../http/asyncHandler.js";
import type { CandidateRequest } from "../middleware/auth.js";
import { getSettings } from "../services/siteSettings.js";
import { UUID_RE } from "../validation/taxonomy.js";

/** A candidate's plan: paid-until date, payment requests, and sending a new one (/api/candidate/billing). */
export const candidateBillingRouter = Router();

const invalid = (res: Response, fields: Record<string, string>) =>
  res.status(400).json({ error: "Please correct the highlighted fields.", code: "validation_failed", fields });

const PAYMENTS = `SELECT id, plan_name, months, amount_bdt, method, sender_number, trx_id, status, admin_note, reviewed_at, created_at
  FROM payments WHERE candidate_id = $1 ORDER BY created_at DESC LIMIT 50`;

candidateBillingRouter.get("/", asyncHandler<CandidateRequest>(async (req, res) => {
  const me = req.candidate!.id;
  const [c, payments, settings] = await Promise.all([
    pool.query("SELECT subscription_until, subscription_until > now() AS active FROM candidates WHERE id = $1", [me]),
    pool.query(PAYMENTS, [me]),
    getSettings(),
  ]);
  res.json({
    subscriptionUntil: c.rows[0]?.subscription_until ?? null,
    active: c.rows[0]?.active === true,
    paywall: settings.paywall,
    payment: settings.payment,
    payments: payments.rows,
  });
}));

const METHODS = ["bkash", "nagad", "rocket"];

/**
 * A payment request: the candidate sent the plan's price by bKash / Nagad / Rocket and gives the sender number and
 * transaction ID. An admin checks it against the merchant account and approves it.
 */
candidateBillingRouter.post("/payments", asyncHandler<CandidateRequest>(async (req, res) => {
  const me = req.candidate!.id;
  const b = (req.body ?? {}) as Record<string, unknown>;
  const fields: Record<string, string> = {};
  const planId = typeof b.planId === "string" && UUID_RE.test(b.planId) ? b.planId : null;
  if (!planId) fields.planId = "plan_unknown";
  const method = String(b.method ?? "");
  if (!METHODS.includes(method)) fields.method = "method_invalid";
  const sender = String(b.senderNumber ?? "").replace(/[\s-]/g, "");
  if (!/^(\+?88)?01\d{9}$/.test(sender)) fields.senderNumber = "phone_invalid";
  const trx = String(b.trxId ?? "").trim().toUpperCase();
  if (!/^[A-Z0-9]{6,30}$/.test(trx)) fields.trxId = "trx_invalid";
  if (Object.keys(fields).length) { invalid(res, fields); return; }

  const settings = await getSettings();
  if (!settings.payment[method as "bkash" | "nagad" | "rocket"]) { invalid(res, { method: "method_unavailable" }); return; }
  const plan = (await pool.query("SELECT name_en, months, price_bdt FROM plans WHERE id = $1 AND is_active", [planId])).rows[0];
  if (!plan) { invalid(res, { planId: "plan_unknown" }); return; }
  const pending = (await pool.query("SELECT count(*)::int AS n FROM payments WHERE candidate_id = $1 AND status = 'pending'", [me])).rows[0].n;
  if (pending >= 3) {
    res.status(429).json({ error: "You already have payments waiting for review.", code: "too_many_pending" }); return;
  }
  try {
    const { rows } = await pool.query(
      `INSERT INTO payments (candidate_id, plan_id, plan_name, months, amount_bdt, method, sender_number, trx_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
      [me, planId, plan.name_en, plan.months, plan.price_bdt, method, sender, trx],
    );
    const saved = await pool.query(`${PAYMENTS.replace("LIMIT 50", "")}`.replace("WHERE candidate_id = $1", "WHERE id = $1"), [rows[0].id]);
    res.status(201).json(saved.rows[0]);
  } catch (e) {
    if ((e as { code?: string }).code === "23505") { invalid(res, { trxId: "trx_used" }); return; }
    throw e;
  }
}));
