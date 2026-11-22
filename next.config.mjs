/** @type {import('next').NextConfig} */

// clinicyza-server base URL (server-side only, read at build time).
const BACKEND_URL = (process.env.BACKEND_URL || "http://localhost:8000").replace(/\/$/, "");

const nextConfig = {
  // cacheComponents / partialPrefetching are disabled: Ant Design's CSS-in-JS
  // (@ant-design/cssinjs) uses Math.random() in its style cache, which
  // Cache Components prerendering rejects.

  // The browser calls /api/v1/* on the portals' own domain; Next.js forwards it to the backend.
  // This keeps the auth cookies first-party (portals and backend are different sites on
  // vercel.app), so they work in every browser and proxy.js can see them.
  async rewrites() {
    return [{ source: "/api/v1/:path*", destination: `${BACKEND_URL}/api/v1/:path*` }];
  },
};

export default nextConfig;
