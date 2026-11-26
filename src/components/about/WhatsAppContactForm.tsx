"use client";

import { useState, type FormEvent } from "react";
import { fieldError, openWhatsApp } from "@/lib/whatsapp";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

function read(form: HTMLFormElement) {
  const data = new FormData(form);
  const get = (k: Field) => String(data.get(k) ?? "").trim();
  return { name: get("name"), email: get("email"), message: get("message") };
}

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {
    name: fieldError(values.name),
    email: fieldError(values.email, { email: true }),
    message: fieldError(values.message),
  };
  return Object.fromEntries(Object.entries(errors).filter(([, v]) => v)) as Errors;
}

/**
 * The About page form: sends the message through WhatsApp. Errors show
 * under each field the way jquery-validate rendered them (label.error,
 * styled by the page CSS). Unlike before, WhatsApp opens only when every
 * field is valid.
 */
export default function WhatsAppContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = read(e.currentTarget);
    const found = validate(values);
    setErrors(found);
    setAttempted(true);
    if (Object.keys(found).length) return;

    openWhatsApp([
      "Halo Khayou,",
      "",
      "Nama: " + values.name,
      "Email: " + values.email,
      "",
      "Pesan:",
      values.message,
    ]);
  };

  // After the first submit, re-check as the user types (as jquery-validate did).
  const onChange = (e: FormEvent<HTMLFormElement>) => {
    if (attempted) setErrors(validate(read(e.currentTarget)));
  };

  const errorFor = (field: Field) =>
    errors[field] ? (
      <label id={`wa-${field}-error`} className="error" htmlFor={`wa-${field}`}>
        {errors[field]}
      </label>
    ) : null;

  const inputProps = (field: Field) => ({
    id: `wa-${field}`,
    name: field,
    required: true,
    className: errors[field] ? "error" : undefined,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `wa-${field}-error` : undefined,
  });

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <form
        id="wa-contact-form"
        className="contact-form-validated"
        noValidate
        onSubmit={onSubmit}
        onChange={onChange}
      >
        <div className="form-group">
          <input type="text" placeholder="Name" {...inputProps("name")} />
          {errorFor("name")}
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" {...inputProps("email")} />
          {errorFor("email")}
        </div>
        <div className="form-group">
          <textarea placeholder="Message..." {...inputProps("message")}></textarea>
          {errorFor("message")}
        </div>
        <div className="form-group message-btn" style={{ textAlign: "center" }}>
          <button type="submit" className="thm-btn form-inner__btn">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
}
