/**
 * The three portals. `key` is also the API role and the URL segment:
 *   /admin/login → POST {API}/admin/login
 */
const build = ({ key, ...rest }) => ({
  key,
  basePath: `/${key}`,
  loginPath: `/${key}/login`,
  forgotPasswordPath: `/${key}/forgot-password`,
  resetPasswordPath: `/${key}/reset-password`,
  dashboardPath: `/${key}/dashboard`,
  ...rest,
});

export const PORTALS = {
  admin: build({
    key: "admin",
    label: "Admin portal",
    shortLabel: "Admin",
    icon: "shield",
    description: "Manage doctors, patients and platform settings.",
    nav: [{ label: "Dashboard", href: "/admin/dashboard", icon: "gauge" }],
  }),
  doctor: build({
    key: "doctor",
    label: "Doctor portal",
    shortLabel: "Doctor",
    icon: "stetho",
    description: "See your consultations, patients and notes.",
    nav: [{ label: "Dashboard", href: "/doctor/dashboard", icon: "gauge" }],
  }),
  patient: build({
    key: "patient",
    label: "Patient portal",
    shortLabel: "Patient",
    icon: "user",
    description: "Your consultations, prescriptions and documents.",
    nav: [{ label: "Dashboard", href: "/patient/dashboard", icon: "gauge" }],
  }),
};

export const PORTAL_LIST = Object.values(PORTALS);
