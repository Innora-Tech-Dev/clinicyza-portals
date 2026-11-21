import { PORTALS } from "@/constants/portals";
import PortalShell from "@/components/shared/portal-shell/PortalShell";
import Navbar from "./layout/navbar/Navbar";
import Sidebar from "./layout/sidebar/Sidebar";

/** Admin portal shell — sidebar + navbar around every signed-in admin page. */
export default function AdminPortalMain({ children }) {
  return (
    <PortalShell portal={PORTALS.admin} sidebar={<Sidebar />} navbar={<Navbar />}>
      {children}
    </PortalShell>
  );
}
