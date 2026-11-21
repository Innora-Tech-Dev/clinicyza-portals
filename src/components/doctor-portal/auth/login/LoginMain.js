import { PORTALS } from "@/constants/portals";
import LoginForm from "@/components/shared/auth/LoginForm";

/** Doctor sign-in. */
export default function LoginMain({ next }) {
  return <LoginForm portal={PORTALS.doctor} next={next} />;
}
