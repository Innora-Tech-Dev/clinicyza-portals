import ResetPasswordMain from "@/components/patient-portal/auth/reset-password/ResetPasswordMain";

/** Patient reset-password page view — rendered by app/(auth)/patient/reset-password/page.js */
export default function Reset({ token }) {
  return <ResetPasswordMain token={token} />;
}
