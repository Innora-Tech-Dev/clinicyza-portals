import { PORTALS } from "@/constants/portals";
import ResetPasswordForm from "@/components/shared/auth/ResetPasswordForm";

/** Doctor — set a new password from the emailed link. */
export default function ResetPasswordMain({ token }) {
  return <ResetPasswordForm portal={PORTALS.doctor} token={token} />;
}
