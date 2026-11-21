import Link from "next/link";
import { PORTAL_LIST } from "@/constants/portals";
import { ROUTES, SITE } from "@/constants/constants";
import Logo from "@/ui-components/logo/Logo";
import IconTile from "@/ui-components/icons/IconTile";
import Icon from "@/ui-components/icons/Icon";
import { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./portalChooser.module.css";

/** "/" — choose which portal to sign in to. */
export default function PortalChooser() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Logo />
        <h1 className={styles.title}>
          Sign in to <Accent>your</Accent> portal
        </h1>
        <p className="text-body-lg">Choose how you use {SITE.name}.</p>

        <ul className={styles.list}>
          {PORTAL_LIST.map((portal) => (
            <li key={portal.key}>
              <Link href={portal.loginPath} className={styles.card}>
                <IconTile name={portal.icon} />
                <span className={styles.text}>
                  <span className={styles.label}>{portal.label}</span>
                  <span className={styles.description}>{portal.description}</span>
                </span>
                <Icon name="right" size={20} className={styles.chevron} />
              </Link>
            </li>
          ))}
        </ul>

        <a href={ROUTES.website} className={styles.back}>
          ← Back to {SITE.name} website
        </a>
      </div>
    </main>
  );
}
