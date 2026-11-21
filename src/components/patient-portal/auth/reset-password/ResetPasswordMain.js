import { PORTALS } from "@/constants/portals";
import ResetPasswordForm from "@/components/shared/auth/ResetPasswordForm";

/** Patient — set a new password from the emailed link. */
export default function ResetPasswordMain({ token }) {
  return <ResetPasswordForm portal={PORTALS.patient} token={token} />;
}
