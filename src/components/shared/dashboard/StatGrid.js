import Stat from "@/ui-components/stats/Stat";
import styles from "./dashboard.module.css";

/** Row of stat cards — stats = [{ key, label, value }] from the API. */
export default function StatGrid({ stats = [] }) {
  return (
    <div className={styles.statGrid}>
      {stats.map((stat) => (
        <div key={stat.key} className={styles.statCard}>
          <Stat value={stat.value.toLocaleString()} label={stat.label} />
        </div>
      ))}
    </div>
  );
}
