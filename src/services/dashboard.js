import { apiRequest } from "@/lib/api";

export const getDashboard = (role) => apiRequest(`/${role}/dashboard`, { role });
