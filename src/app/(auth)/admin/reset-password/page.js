import Reset from "@/pages-files/admin-portal/auth/Reset";

export const metadata = { title: "Admin — reset password" };

// /admin/reset-password?token=…  (link from the reset email)
export default async function AdminResetPasswordPage({ searchParams }) {
  const { token } = await searchParams;
  return <Reset token={typeof token === "string" ? token : undefined} />;
}
