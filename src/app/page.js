import PortalChooser from "@/components/shared/portal-chooser/PortalChooser";

export const metadata = { title: "Choose your portal" };

// "/" — pick admin, doctor or patient portal
export default function HomePage() {
  return <PortalChooser />;
}
