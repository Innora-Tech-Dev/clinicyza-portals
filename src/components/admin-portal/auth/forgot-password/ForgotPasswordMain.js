import { PORTALS } from "@/constants/portals";
import ForgotPasswordForm from "@/components/shared/auth/ForgotPasswordForm";

/** Admin — request a password reset link. */
export default function ForgotPasswordMain() {
  return <ForgotPasswordForm portal={PORTALS.admin} />;
}
