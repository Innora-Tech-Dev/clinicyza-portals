import ResetPasswordMain from "@/components/doctor-portal/auth/reset-password/ResetPasswordMain";

/** Doctor reset-password page view — rendered by app/(auth)/doctor/reset-password/page.js */
export default function Reset({ token }) {
  return <ResetPasswordMain token={token} />;
}
