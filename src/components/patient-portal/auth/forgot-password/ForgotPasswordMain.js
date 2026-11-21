import { PORTALS } from "@/constants/portals";
import ForgotPasswordForm from "@/components/shared/auth/ForgotPasswordForm";

/** Patient — request a password reset link. */
export default function ForgotPasswordMain() {
  return <ForgotPasswordForm portal={PORTALS.patient} />;
}
