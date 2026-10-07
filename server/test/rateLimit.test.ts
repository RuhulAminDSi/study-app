import { describe, it, expect } from "vitest";
import { clientKey } from "../src/middleware/rateLimit";

describe("clientKey", () => {
  it("strips a port from an IPv4 address", () => {
    expect(clientKey("203.0.113.1:40011")).toBe("203.0.113.1");
  });

  it("strips a port from a bracketed IPv6 address", () => {
    expect(clientKey("[2001:db8::1]:443")).toBe("2001:db8::1");
  });

  it("leaves addresses without a port unchanged", () => {
    expect(clientKey("203.0.113.1")).toBe("203.0.113.1");
    expect(clientKey("2001:db8::1")).toBe("2001:db8::1");
    expect(clientKey("::ffff:127.0.0.1")).toBe("::ffff:127.0.0.1");
  });

  it("falls back to a fixed key when the address is unknown", () => {
    expect(clientKey(undefined)).toBe("unknown");
  });
});
