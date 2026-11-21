import { env } from "@/config/env";

/** Error thrown for any non-success API response. */
export class ApiRequestError extends Error {
  constructor({ status, code, message, details }) {
    super(message || "Something went wrong");
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

const AUTH_EXPIRED_CODES = ["TOKEN_EXPIRED"];
const refreshing = new Map(); // role → in-flight refresh promise (avoid parallel refreshes)

async function rawRequest(path, { method = "GET", body } = {}) {
  let response;
  try {
    response = await fetch(`${env.apiBaseUrl}${path}`, {
      method,
      credentials: "include", // send/receive the httpOnly auth cookies
      headers: {
        "Content-Type": "application/json",
        "X-Client": "web", // tell the API to use cookies instead of returning tokens
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      cache: "no-store",
    });
  } catch {
    throw new ApiRequestError({
      status: 0,
      code: "NETWORK_ERROR",
      message: "Can't reach the server. Check your connection and try again.",
    });
  }

  const json = await response.json().catch(() => null);
  if (!response.ok || !json?.success) {
    throw new ApiRequestError({
      status: response.status,
      code: json?.error?.code ?? "UNKNOWN_ERROR",
      message: json?.error?.message ?? "Something went wrong",
      details: json?.error?.details,
    });
  }
  return json;
}

function refreshSession(role) {
  if (!refreshing.has(role)) {
    const promise = rawRequest(`/${role}/refresh`, { method: "POST" }).finally(() =>
      refreshing.delete(role),
    );
    refreshing.set(role, promise);
  }
  return refreshing.get(role);
}

/**
 * Call the Clinicyza API.
 * Pass `role` for authenticated calls: an expired access token is refreshed once
 * automatically and the request retried.
 * Returns the full envelope: { success, message?, data }.
 */
export async function apiRequest(path, { role, ...options } = {}) {
  try {
    return await rawRequest(path, options);
  } catch (error) {
    if (role && error.status === 401 && AUTH_EXPIRED_CODES.includes(error.code)) {
      await refreshSession(role);
      return rawRequest(path, options);
    }
    throw error;
  }
}

/** True when the error means "you need to sign in again". */
export const isAuthError = (error) => error instanceof ApiRequestError && error.status === 401;
