"use client";

import { Skeleton } from "antd";
import Button from "@/ui-components/buttons/Button";
import EmptyState from "@/ui-components/feedback/EmptyState";
import styles from "./dashboard.module.css";

/** Loading skeleton for dashboards. */
export function DashboardLoading() {
  return (
    <div className={styles.stack} aria-busy="true" aria-label="Loading dashboard">
      <Skeleton active title={{ width: 320 }} paragraph={{ rows: 1, width: 240 }} />
      <div className={styles.statGrid}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={styles.statCard}>
            <Skeleton active title={false} paragraph={{ rows: 2 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Error state with retry. */
export function DashboardError({ message, onRetry }) {
  return (
    <EmptyState
      icon="alert"
      title="Couldn't load your dashboard"
      description={message}
      action={
        <Button size="sm" onClick={onRetry} iconLeft="refresh">
          Try again
        </Button>
      }
    />
  );
}
