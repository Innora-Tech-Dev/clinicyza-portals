import DashboardHeader from "@/components/shared/dashboard/DashboardHeader";
import StatGrid from "@/components/shared/dashboard/StatGrid";
import styles from "./overview.module.css";

/** Greeting + key figures. */
export default function Overview({ user, stats, actions }) {
  return (
    <section className={styles.overview}>
      <DashboardHeader name={user?.name} subtitle="Your consultations, prescriptions and documents in one place." actions={actions} />
      <StatGrid stats={stats} />
    </section>
  );
}
