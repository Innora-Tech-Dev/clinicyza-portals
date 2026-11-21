import { NextResponse } from "next/server";

/**
 * Route protection for the portals.
 * Each portal has its own auth cookies (set by clinicyza-server): cz_{role}_at / cz_{role}_rt.
 * Without them, protected pages redirect to that portal's login.
 * This is a UX guard only — the API verifies every token itself.
 */
const PUBLIC_PAGES = new Set(["login", "forgot-password", "reset-password"]);

export function proxy(request) {
  const { pathname, search } = request.nextUrl;
  const [, role, page] = pathname.split("/"); // "/admin/dashboard" → ["", "admin", "dashboard"]

  const signedIn =
    request.cookies.has(`cz_${role}_at`) || request.cookies.has(`cz_${role}_rt`);

  // "/admin" → dashboard or login
  if (!page) {
    const target = signedIn ? `/${role}/dashboard` : `/${role}/login`;
    return NextResponse.redirect(new URL(target, request.url));
  }

  if (PUBLIC_PAGES.has(page)) return NextResponse.next();

  if (!signedIn) {
    const login = new URL(`/${role}/login`, request.url);
    login.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/doctor/:path*", "/patient/:path*"],
};
