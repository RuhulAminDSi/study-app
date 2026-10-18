import rateLimit from "express-rate-limit";

/**
 * Rate-limit key for a client address. Azure App Service's front end forwards the client as
 * `ip:port` in X-Forwarded-For, so without stripping the port every new connection would get
 * a fresh counter and the limit would never trigger.
 */
export function clientKey(ip: string | undefined): string {
  if (!ip) return "unknown";
  const bracketed = ip.match(/^\[([^\]]+)\]:\d+$/); // [IPv6]:port
  if (bracketed) return bracketed[1];
  const ipv4WithPort = ip.match(/^(\d{1,3}(?:\.\d{1,3}){3}):\d+$/); // a.b.c.d:port
  if (ipv4WithPort) return ipv4WithPort[1];
  return ip;
}

/**
 * One limiter per route group; each call has its own in-memory counters.
 * Only failed requests count, so many people behind one IP (a classroom, mobile carrier NAT)
 * can sign in normally while password guessing is still capped.
 */
export function createAuthLimiter(max: number) {
  return rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: max,
    skipSuccessfulRequests: true,
    keyGenerator: (req) => clientKey(req.ip),
    // req.ip may legitimately carry a port behind Azure; clientKey normalises it.
    validate: { ip: false },
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: { error: "Too many attempts. Try again in 15 minutes.", code: "too_many_attempts" },
  });
}
