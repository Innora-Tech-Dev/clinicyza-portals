import { SITE } from "@/constants/constants";
import Logo from "@/ui-components/logo/Logo";
import TrustBadge from "@/ui-components/badges/TrustBadge";
import { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./authShell.module.css";

/** Split screen used by every auth page: navy brand panel + form area. */
export default function AuthShell({ children }) {
  return (
    <div className={styles.page}>
      <aside className={styles.brand}>
        <Logo variant="white" />
        <div className={styles.brandText}>
          <h2 className={styles.brandTitle}>
            Calm, premium care, <Accent>by design</Accent>.
          </h2>
          <p className={styles.tagline}>“{SITE.tagline}”</p>
        </div>
        <div className={styles.badges}>
          <TrustBadge icon="shield">GDPR compliant</TrustBadge>
          <TrustBadge icon="lock">Encrypted</TrustBadge>
        </div>
      </aside>
      <main className={styles.content}>
        <div className={styles.mobileLogo}>
          <Logo />
        </div>
        <div className={styles.card}>{children}</div>
      </main>
    </div>
  );
}
