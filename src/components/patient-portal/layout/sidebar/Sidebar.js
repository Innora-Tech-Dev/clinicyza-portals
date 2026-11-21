import { ROUTES } from "@/constants/constants";
import PortalSidebar from "@/components/shared/portal-shell/PortalSidebar";
import Button from "@/ui-components/buttons/Button";

/** Patient portal sidebar — menu items live in constants/portals.js. */
export default function Sidebar() {
  return (
    <PortalSidebar
      footer={
        <Button href={ROUTES.bookConsultation} block icon="arrow">
          Book consultation
        </Button>
      }
    />
  );
}
