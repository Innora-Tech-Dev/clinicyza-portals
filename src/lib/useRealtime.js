"use client";

import { useEffect, useState } from "react";
import { env } from "@/config/env";
import { getRealtimeTicket } from "@/services/realtime";

const OFF = Object.freeze({ status: "off", socket: null });

/**
 * Live connection to the Clinicyza realtime server for the signed-in user.
 * A fresh ticket is fetched on every (re)connect, so expired tickets never block reconnecting.
 *
 *   const { status, socket } = useRealtime("doctor", Boolean(user));
 *   status: "off" | "connecting" | "live" | "offline"
 */
export function useRealtime(role, enabled) {
  const active = enabled && env.realtimeEnabled;
  const [state, setState] = useState({ status: "connecting", socket: null });

  useEffect(() => {
    if (!active) return undefined;
    let socket;
    let cancelled = false;

    (async () => {
      let first;
      try {
        first = await getRealtimeTicket(role);
      } catch {
        if (!cancelled) setState({ status: "offline", socket: null });
        return;
      }
      const { io } = await import("socket.io-client");
      if (cancelled) return;

      let pending = first.token;
      socket = io(first.url, {
        transports: ["websocket"],
        auth: (cb) => {
          if (pending) {
            cb({ token: pending });
            pending = null;
            return;
          }
          getRealtimeTicket(role)
            .then((t) => cb({ token: t.token }))
            .catch(() => cb({ token: "" }));
        },
      });
      socket.on("connect", () => setState({ status: "live", socket }));
      socket.on("disconnect", () => setState({ status: "offline", socket }));
      socket.on("connect_error", () => setState({ status: "offline", socket }));
      socket.on("session:revoked", () => socket.disconnect());
    })();

    return () => {
      cancelled = true;
      socket?.disconnect();
    };
  }, [role, active]);

  return active ? state : OFF;
}
