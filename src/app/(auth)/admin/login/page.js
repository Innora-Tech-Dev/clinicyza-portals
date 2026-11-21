import Login from "@/pages-files/admin-portal/auth/Login";

export const metadata = { title: "Admin sign in" };

// /admin/login  (?next=/admin/… returns there after sign-in)
export default async function AdminLoginPage({ searchParams }) {
  const { next } = await searchParams;
  return <Login next={typeof next === "string" ? next : undefined} />;
}
