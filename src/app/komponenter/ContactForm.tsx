
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string,
  message: string;
}

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const [status, setStatus] = useState<    "idle" | "loading" | "submitted" | "error"
  >("idle");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const requiredFieldErrorMsg = "Dette feltet er påkrevd.";

  async function onSubmit(data: FormData) {
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Kunne ikke sende meldingen.");
      }

      setStatus("submitted");
      reset();

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Kontakt meg</h2>

      {/* NAVN */}
      <div className="form-group mb-4">
        <label htmlFor="contactName">
          Navn:
        </label>

        <input
          id="contactName"
          type="text"
          autoComplete="name"
          className="form-control"
          placeholder=""
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby="name-error"
          {...register("name", {
            required: requiredFieldErrorMsg,
          })}
        />

        {errors.name && (
          <span
            id="name-error"
            className="formValidationError"
          >
            {errors.name.message}
          </span>
        )}
      </div>


      {/* E-POST */}
      <div className="form-group mb-4">
        <label htmlFor="contactEmail">
          E-post:
        </label>

        <input
          id="contactEmail"
          type="email"
          autoComplete="email"
          className="form-control"
          placeholder=""
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
          {...register("email", {
            required: requiredFieldErrorMsg,
            pattern: {
              value: emailRegex,
              message:
                "Vennligst skriv inn en gyldig e-postadresse.",
            },
          })}
        />

        {errors.email && (
          <span
            id="email-error"
            className="formValidationError"
          >
            {errors.email.message}
          </span>
        )}
      </div>


      {/* FORESPØRSEL */}
      <div className="form-group mb-4">
        <label htmlFor="contactSubject">
          Forespørsel:
        </label>

        <input
          id="contactSubject"
          type="text"
          className="form-control"
          placeholder=""
          aria-invalid={errors.subject ? "true" : "false"}
          aria-describedby="subject-error"
          {...register("subject", {
            required: requiredFieldErrorMsg,
          })}
        />

        {errors.subject && (
          <span
            id="subject-error"
            className="formValidationError"
          >
            {errors.subject.message}
          </span>
        )}
      </div>


      {/* MELDING */}
      <div className="form-group mb-4">
        <label htmlFor="contactMessage">
          Melding:
        </label>

        <textarea
          id="contactMessage"
          rows={5}
          className="form-control"
          placeholder=""
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby="message-error"
          {...register("message", {
            required: requiredFieldErrorMsg,
          })}
        />

        {errors.message && (
          <span
            id="message-error"
            className="formValidationError"
          >
            {errors.message.message}
          </span>
        )}
      </div>
      


      {/* SEND-KNAPP */}
      <button
        type="submit"
        className="btn btn-contact btn-send-message"
        disabled={status === "loading"}
      >
        {status === "loading"
          ? "Sender..."
          : "Send melding"}
      </button>


      {/* SUKSESS */}
      {status === "submitted" && (
        <p className="formSuccess">
          Tusen takk for meldingen! Jeg tar kontakt med deg så snart jeg
          har anledning.
        </p>
      )}


      {/* FEIL */}
      {status === "error" && (
        <p className="formError">
          Det oppstod en feil ved sending av meldingen. Vennligst prøv
          igjen.
        </p>
      )}

    </form>
  );
}

