import { PORTALS } from "@/constants/portals";
import PortalShell from "@/components/shared/portal-shell/PortalShell";
import Navbar from "./layout/navbar/Navbar";
import Sidebar from "./layout/sidebar/Sidebar";

/** Doctor portal shell — sidebar + navbar around every signed-in doctor page. */
export default function DoctorPortalMain({ children }) {
  return (
    <PortalShell portal={PORTALS.doctor} sidebar={<Sidebar />} navbar={<Navbar />}>
      {children}
    </PortalShell>
  );
}
