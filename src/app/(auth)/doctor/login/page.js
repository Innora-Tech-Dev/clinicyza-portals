import Login from "@/pages-files/doctor-portal/auth/Login";

export const metadata = { title: "Doctor sign in" };

// /doctor/login  (?next=/doctor/… returns there after sign-in)
export default async function DoctorLoginPage({ searchParams }) {
  const { next } = await searchParams;
  return <Login next={typeof next === "string" ? next : undefined} />;
}
