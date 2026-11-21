import { apiRequest } from "@/lib/api";

/** Auth calls for one portal (role = "admin" | "doctor" | "patient"). */

export const login = (role, { email, password }) =>
  apiRequest(`/${role}/login`, { method: "POST", body: { email, password } });

export const logout = (role) => apiRequest(`/${role}/logout`, { method: "POST" });

export const getMe = (role) => apiRequest(`/${role}/me`, { role });

export const forgotPassword = (role, email) =>
  apiRequest(`/${role}/forgot-password`, { method: "POST", body: { email } });

export const resetPassword = (role, { token, password }) =>
  apiRequest(`/${role}/reset-password`, { method: "POST", body: { token, password } });
