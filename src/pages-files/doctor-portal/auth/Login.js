import LoginMain from "@/components/doctor-portal/auth/login/LoginMain";

/** Doctor sign-in page view — rendered by app/(auth)/doctor/login/page.js */
export default function Login({ next }) {
  return <LoginMain next={next} />;
}
