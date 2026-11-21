import DoctorPortalMain from "@/components/doctor-portal/DoctorPortalMain";

/** Layout for every signed-in doctor page: sidebar + navbar. */
export default function DoctorPortalLayout({ children }) {
  return <DoctorPortalMain>{children}</DoctorPortalMain>;
}
