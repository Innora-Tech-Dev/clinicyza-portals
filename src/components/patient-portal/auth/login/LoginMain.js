import { PORTALS } from "@/constants/portals";
import LoginForm from "@/components/shared/auth/LoginForm";

/** Patient sign-in. */
export default function LoginMain({ next }) {
  return <LoginForm portal={PORTALS.patient} next={next} />;
}
