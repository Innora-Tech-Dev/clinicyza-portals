import Reset from "@/pages-files/patient-portal/auth/Reset";

export const metadata = { title: "Patient — reset password" };

// /patient/reset-password?token=…  (link from the reset email)
export default async function PatientResetPasswordPage({ searchParams }) {
  const { token } = await searchParams;
  return <Reset token={typeof token === "string" ? token : undefined} />;
}
