import { PORTALS } from "@/constants/portals";
import PortalShell from "@/components/shared/portal-shell/PortalShell";
import Navbar from "./layout/navbar/Navbar";
import Sidebar from "./layout/sidebar/Sidebar";

/** Patient portal shell — sidebar + navbar around every signed-in patient page. */
export default function PatientPortalMain({ children }) {
  return (
    <PortalShell portal={PORTALS.patient} sidebar={<Sidebar />} navbar={<Navbar />}>
      {children}
    </PortalShell>
  );
}
