import Reset from "@/pages-files/doctor-portal/auth/Reset";

export const metadata = { title: "Doctor — reset password" };

// /doctor/reset-password?token=…  (link from the reset email)
export default async function DoctorResetPasswordPage({ searchParams }) {
  const { token } = await searchParams;
  return <Reset token={typeof token === "string" ? token : undefined} />;
}
