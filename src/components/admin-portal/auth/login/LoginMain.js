import { PORTALS } from "@/constants/portals";
import LoginForm from "@/components/shared/auth/LoginForm";

/** Admin sign-in. */
export default function LoginMain({ next }) {
  return <LoginForm portal={PORTALS.admin} next={next} />;
}
