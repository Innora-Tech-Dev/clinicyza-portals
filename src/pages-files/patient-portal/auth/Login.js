import LoginMain from "@/components/patient-portal/auth/login/LoginMain";

/** Patient sign-in page view — rendered by app/(auth)/patient/login/page.js */
export default function Login({ next }) {
  return <LoginMain next={next} />;
}
