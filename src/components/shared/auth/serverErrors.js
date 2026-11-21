"use client";

import { ApiRequestError } from "@/lib/api";

/**
 * Show API errors on the form: field errors go under their inputs,
 * everything else is returned as a message for the alert above the form.
 */
export function applyServerErrors(form, error) {
  if (error instanceof ApiRequestError && error.code === "VALIDATION_ERROR" && error.details?.length) {
    const byField = {};
    error.details.forEach(({ field, message }) => {
      (byField[field] ??= []).push(message);
    });
    form.setFields(Object.entries(byField).map(([name, errors]) => ({ name, errors })));
    return null;
  }
  return error?.message || "Something went wrong. Please try again.";
}
