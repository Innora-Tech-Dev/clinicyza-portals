"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isAuthError } from "@/lib/api";
import { getMe, logout } from "@/services/auth";
import { PortalContext } from "./PortalContext";
import styles from "./portalShell.module.css";

/**
 * Signed-in layout for a portal: sidebar + top bar + page.
 * Loads the current user once; if the session is gone, sends the user to login.
 *
 *   <PortalShell portal={PORTALS.admin} sidebar={<Sidebar />} navbar={<Navbar />}>{children}</PortalShell>
 */
export default function PortalShell({ portal, sidebar, navbar, children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  const goToLogin = useCallback(
    () => router.replace(`${portal.loginPath}?next=${encodeURIComponent(pathname)}`),
    [router, portal.loginPath, pathname],
  );

  useEffect(() => {
    let active = true;
    getMe(portal.key)
      .then((res) => active && setUser(res.data.user))
      .catch((error) => active && isAuthError(error) && goToLogin());
    return () => {
      active = false;
    };
  }, [portal.key, goToLogin]);

  const signOut = useCallback(async () => {
    setSigningOut(true);
    try {
      await logout(portal.key);
    } finally {
      router.replace(portal.loginPath);
    }
  }, [portal.key, portal.loginPath, router]);

  const value = useMemo(
    () => ({ portal, user, signOut, signingOut, menuOpen, setMenuOpen }),
    [portal, user, signOut, signingOut, menuOpen],
  );

  return (
    <PortalContext.Provider value={value}>
      <div className={styles.shell}>
        {sidebar}
        {menuOpen && <button type="button" className={styles.backdrop} aria-label="Close menu" onClick={() => setMenuOpen(false)} />}
        <div className={styles.main}>
          {navbar}
          <main className={styles.content}>{children}</main>
        </div>
      </div>
    </PortalContext.Provider>
  );
}
