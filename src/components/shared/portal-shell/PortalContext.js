"use client";

import { createContext, useContext } from "react";

export const PortalContext = createContext(null);

/** { portal, user, signOut, signingOut, menuOpen, setMenuOpen } — use inside a portal layout. */
export function usePortal() {
  const value = useContext(PortalContext);
  if (!value) throw new Error("usePortal() must be used inside <PortalShell>");
  return value;
}
