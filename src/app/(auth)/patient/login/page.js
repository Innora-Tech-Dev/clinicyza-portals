import Login from "@/pages-files/patient-portal/auth/Login";

export const metadata = { title: "Patient sign in" };

// /patient/login  (?next=/patient/… returns there after sign-in)
export default async function PatientLoginPage({ searchParams }) {
  const { next } = await searchParams;
  return <Login next={typeof next === "string" ? next : undefined} />;
}
