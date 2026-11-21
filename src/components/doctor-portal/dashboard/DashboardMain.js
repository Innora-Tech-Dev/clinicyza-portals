"use client";

import { DashboardError, DashboardLoading } from "@/components/shared/dashboard/DashboardState";
import { useDashboard } from "@/components/shared/dashboard/useDashboard";
import Overview from "./overview/Overview";
import Upcoming from "./upcoming/Upcoming";
import styles from "./dashboard.module.css";

/** Doctor dashboard — assembles the dashboard sections. */
export default function DashboardMain() {
  const { data, error, loading, retry } = useDashboard("doctor");

  if (loading) return <DashboardLoading />;
  if (error) return <DashboardError message={error} onRetry={retry} />;

  return (
    <div className={styles.page}>
      <Overview user={data.user} stats={data.stats} />
      <Upcoming appointments={data.upcomingAppointments} />
    </div>
  );
}
