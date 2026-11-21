import AdminPortalMain from "@/components/admin-portal/AdminPortalMain";

/** Layout for every signed-in admin page: sidebar + navbar. */
export default function AdminPortalLayout({ children }) {
  return <AdminPortalMain>{children}</AdminPortalMain>;
}
