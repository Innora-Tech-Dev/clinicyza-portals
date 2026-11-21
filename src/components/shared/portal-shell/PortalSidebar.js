"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/ui-components/logo/Logo";
import Icon from "@/ui-components/icons/Icon";
import Avatar from "@/ui-components/cards/Avatar";
import { usePortal } from "./PortalContext";
import styles from "./portalShell.module.css";

/** Sidebar shared by all portals — items come from constants/portals.js → nav. */
export default function PortalSidebar({ footer }) {
  const pathname = usePathname();
  const { portal, user, signOut, signingOut, menuOpen, setMenuOpen } = usePortal();

  return (
    <aside className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ""}`}>
      <div className={styles.sidebarTop}>
        <Logo href={portal.dashboardPath} />
        <span className={styles.portalPill}>{portal.label}</span>
      </div>

      <nav aria-label={`${portal.label} navigation`}>
        <ul className={styles.nav}>
          {portal.nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${active ? styles.navActive : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon name={item.icon} size={20} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.sidebarBottom}>
        {footer}
        <div className={styles.userCard}>
          <Avatar name={user?.name ?? "…"} />
          <div className={styles.userText}>
            <p className={styles.userName}>{user?.name ?? "Loading…"}</p>
            <p className={styles.userEmail}>{user?.email ?? ""}</p>
          </div>
        </div>
        <button type="button" className={styles.signOut} onClick={signOut} disabled={signingOut}>
          <Icon name="x" size={18} />
          {signingOut ? "Signing out…" : "Sign out"}
        </button>
      </div>
    </aside>
  );
}
