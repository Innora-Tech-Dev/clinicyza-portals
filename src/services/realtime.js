import { apiRequest } from "@/lib/api";

/** POST /{role}/realtime-token → { token, url, expiresIn } — a 60-second WebSocket ticket. */
export const getRealtimeTicket = (role) =>
  apiRequest(`/${role}/realtime-token`, { role, method: "POST" }).then((res) => res.data);
