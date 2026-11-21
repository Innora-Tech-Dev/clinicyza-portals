import AuthShell from "@/components/shared/auth/AuthShell";

/** Layout for every login / forgot / reset page of all portals. */
export default function AuthLayout({ children }) {
  return <AuthShell>{children}</AuthShell>;
}
