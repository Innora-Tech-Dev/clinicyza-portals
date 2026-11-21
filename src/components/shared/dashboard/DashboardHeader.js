import { Accent } from "@/ui-components/typography/SectionHeading";
import styles from "./dashboard.module.css";

const greeting = () => {
  const hour = new Date().getHours();
  return hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
};

// "Marco Bianchi" → "Marco" · "Dr. Giulia Romano" → "Dr. Romano"
const shortName = (name = "") => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "";
  return /^dr\.?$/i.test(parts[0]) ? `Dr. ${parts.at(-1)}` : parts[0];
};

/** "Good morning, Marco." + subtitle + optional actions. */
export default function DashboardHeader({ name, subtitle, actions }) {
  const firstName = shortName(name);
  return (
    <div className={styles.header}>
      <div>
        <h1 className={styles.title}>
          {greeting()}
          {firstName ? (
            <>
              , <Accent>{firstName}</Accent>.
            </>
          ) : (
            "."
          )}
        </h1>
        {subtitle && <p className="text-body">{subtitle}</p>}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
