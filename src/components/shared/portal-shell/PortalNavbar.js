"use client";

import IconButton from "@/ui-components/buttons/IconButton";
import Avatar from "@/ui-components/cards/Avatar";
import { usePortal } from "./PortalContext";
import styles from "./portalShell.module.css";

/** Top bar shared by all portals: page title, user, mobile menu button. */
export default function PortalNavbar({ title = "Dashboard", actions }) {
  const { user, menuOpen, setMenuOpen } = usePortal();

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <IconButton
          className={styles.menuButton}
          icon={menuOpen ? "x" : "menu"}
          label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        />
        <p className={styles.navbarTitle}>{title}</p>
      </div>
      <div className={styles.navbarRight}>
        {actions}
        {user && (
          <span className={styles.navbarUser}>
            <Avatar name={user.name} size="sm" />
            <span className={styles.navbarUserName}>{user.name}</span>
          </span>
        )}
      </div>
    </header>
  );
}
