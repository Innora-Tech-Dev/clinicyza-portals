"use client";

import { DashboardError, DashboardLoading } from "@/components/shared/dashboard/DashboardState";
import { useDashboard } from "@/components/shared/dashboard/useDashboard";
import Overview from "./overview/Overview";
import RecentUsers from "./recent-users/RecentUsers";
import styles from "./dashboard.module.css";

/** Admin dashboard — assembles the dashboard sections. */
export default function DashboardMain() {
  const { data, error, loading, retry } = useDashboard("admin");

  if (loading) return <DashboardLoading />;
  if (error) return <DashboardError message={error} onRetry={retry} />;

  return (
    <div className={styles.page}>
      <Overview user={data.user} stats={data.stats} />
      <RecentUsers users={data.recentUsers} />
    </div>
  );
}
