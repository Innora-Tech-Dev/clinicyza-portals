/**
 * App-wide constants for the portals. Change values here — never hardcode in components.
 * Environment-specific values live in .env.local → src/config/env.js
 */
import { env } from "@/config/env";

export const SITE = {
  name: "Clinicyza",
  legalName: "Clinicyza Health Ltd.",
  tagline: "Your doctor, wherever life takes you.",
  locale: "en",
  url: env.portalsUrl,
  websiteUrl: env.websiteUrl,
};

export const CONTACT = {
  supportEmail: "support@clinicyza.com",
};

export const ROUTES = {
  home: "/",
  website: env.websiteUrl,
  bookConsultation: `${env.websiteUrl}/appointment`,
};

export const PRICING = {
  currency: "€",
  consultationFrom: 35,
};

export const COUNTRIES = [
  { value: "IT", label: "Italy", dialCode: "+39" },
  { value: "ES", label: "Spain", dialCode: "+34" },
  { value: "FR", label: "France", dialCode: "+33" },
  { value: "DE", label: "Germany", dialCode: "+49" },
  { value: "PT", label: "Portugal", dialCode: "+351" },
  { value: "NL", label: "Netherlands", dialCode: "+31" },
  { value: "BE", label: "Belgium", dialCode: "+32" },
  { value: "AT", label: "Austria", dialCode: "+43" },
];

export const LANGUAGES = ["IT", "EN", "FR", "ES", "DE", "PT"];
