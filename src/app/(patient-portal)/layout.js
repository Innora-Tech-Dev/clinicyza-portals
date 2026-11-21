import PatientPortalMain from "@/components/patient-portal/PatientPortalMain";

/** Layout for every signed-in patient page: sidebar + navbar. */
export default function PatientPortalLayout({ children }) {
  return <PatientPortalMain>{children}</PatientPortalMain>;
}
