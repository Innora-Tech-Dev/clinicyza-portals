import LoginMain from "@/components/admin-portal/auth/login/LoginMain";

/** Admin sign-in page view — rendered by app/(auth)/admin/login/page.js */
export default function Login({ next }) {
  return <LoginMain next={next} />;
}
