"use client";

import { useCallback, useEffect, useState } from "react";
import { isAuthError } from "@/lib/api";
import { getDashboard } from "@/services/dashboard";

/**
 * Loads GET /{role}/dashboard.
 * Auth errors are left to <PortalShell>, which redirects to login.
 */
export function useDashboard(role) {
  const [state, setState] = useState({ data: null, error: null, loading: true });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    getDashboard(role)
      .then((res) => active && setState({ data: res.data, error: null, loading: false }))
      .catch((error) => {
        if (!active || isAuthError(error)) return;
        setState({ data: null, error: error.message, loading: false });
      });
    return () => {
      active = false;
    };
  }, [role, attempt]);

  const retry = useCallback(() => {
    setState({ data: null, error: null, loading: true });
    setAttempt((n) => n + 1);
  }, []);

  return { ...state, retry };
}
