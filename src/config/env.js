/**
 * Single place to read environment variables (.env.local).
 * NEXT_PUBLIC_* vars must be referenced literally so Next.js can inline them.
 */
export const env = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5050/api/v1",
  websiteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3001",
  portalsUrl: process.env.NEXT_PUBLIC_PORTALS_URL || "http://localhost:3002",
};
