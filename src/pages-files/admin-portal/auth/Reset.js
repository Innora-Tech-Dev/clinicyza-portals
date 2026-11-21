import ResetPasswordMain from "@/components/admin-portal/auth/reset-password/ResetPasswordMain";

/** Admin reset-password page view — rendered by app/(auth)/admin/reset-password/page.js */
export default function Reset({ token }) {
  return <ResetPasswordMain token={token} />;
}
