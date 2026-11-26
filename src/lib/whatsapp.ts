import { CONTACT } from "@/lib/site";

/** Opens a WhatsApp chat with Khayou in a new tab, message prefilled. */
export function openWhatsApp(lines: string[]) {
  const url = `${CONTACT.whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(url, "_blank", "noopener");
}

// Close to jquery-validate's "email" rule, which the old forms used.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const REQUIRED_MESSAGE = "This field is required.";
export const EMAIL_MESSAGE = "Please enter a valid email address.";

/** Error text for a field, worded like jquery-validate, or undefined when valid. */
export function fieldError(value: string, { email = false } = {}) {
  if (!value.trim()) return REQUIRED_MESSAGE;
  if (email && !EMAIL.test(value.trim())) return EMAIL_MESSAGE;
  return undefined;
}
