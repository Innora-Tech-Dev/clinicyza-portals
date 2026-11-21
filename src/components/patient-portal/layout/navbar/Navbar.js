"use client";

import { usePathname } from "next/navigation";
import { PORTALS } from "@/constants/portals";
import PortalNavbar from "@/components/shared/portal-shell/PortalNavbar";

/** Patient portal top bar — title follows the active sidebar item. */
export default function Navbar() {
  const pathname = usePathname();
  const active = PORTALS.patient.nav.find((item) => pathname.startsWith(item.href));
  return <PortalNavbar title={active?.label ?? "Patient portal"} />;
}
