/**
 * Single place to read environment variables (.env.local).
 * NEXT_PUBLIC_* vars must be referenced literally so Next.js can inline them.
 */
export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "/api/v1", // same-origin; forwarded by next.config.mjs rewrites
  websiteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3001",
  portalsUrl: process.env.NEXT_PUBLIC_PORTALS_URL || "http://localhost:3002",
  // Live updates via the realtime server (runs locally only for now — off on Vercel)
  realtimeEnabled: process.env.NEXT_PUBLIC_REALTIME_ENABLED === "true",
};
