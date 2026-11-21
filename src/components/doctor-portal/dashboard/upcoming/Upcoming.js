import EmptyState from "@/ui-components/feedback/EmptyState";
import styles from "./upcoming.module.css";

/** Upcoming consultations (appointments module comes next). */
export default function Upcoming({ appointments = [] }) {
  return (
    <section className={styles.panel}>
      <h2 className={styles.title}>Upcoming consultations</h2>
      {appointments.length === 0 && (
        <EmptyState
          icon="calendar"
          title="No consultations scheduled"
          description="New bookings assigned to you will appear here."
        />
      )}
    </section>
  );
}
