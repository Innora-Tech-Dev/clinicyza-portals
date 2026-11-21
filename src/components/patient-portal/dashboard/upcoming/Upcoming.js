import { ROUTES } from "@/constants/constants";
import Button from "@/ui-components/buttons/Button";
import EmptyState from "@/ui-components/feedback/EmptyState";
import styles from "./upcoming.module.css";

/** Upcoming consultations (appointments module comes next). */
export default function Upcoming({ appointments = [] }) {
  return (
    <section className={styles.panel}>
      <h2 className={styles.title}>Your upcoming consultations</h2>
      {appointments.length === 0 && (
        <EmptyState
          icon="video"
          title="No consultations booked"
          description="Feeling unwell? See a licensed doctor in minutes."
          action={
            <Button size="sm" href={ROUTES.bookConsultation} icon="arrow">
              Book consultation
            </Button>
          }
        />
      )}
    </section>
  );
}
