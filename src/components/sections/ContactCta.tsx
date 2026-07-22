"use client";

import { ArrowRightIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SelectField, TextareaField, TextField } from "@/components/ui/Field";
import { siteConfig } from "@/lib/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

type Errors = Partial<
  Record<
    "name" | "email" | "situation" | "service" | "message" | "consent",
    string
  >
>;

export function ContactCta() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Errors = {};

    if (!String(data.get("name") || "").trim())
      nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") || ""))) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!data.get("situation"))
      nextErrors.situation = "Please choose your situation.";
    if (!data.get("service")) nextErrors.service = "Please choose a service.";
    if (String(data.get("message") || "").trim().length < 20) {
      nextErrors.message =
        "Please share at least 20 characters about what you need.";
    }
    if (!data.get("consent"))
      nextErrors.consent = "Please confirm that we can reply to you.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setMessage("Please review the highlighted fields.");
      return;
    }

    if (!siteConfig.formEndpoint) {
      setStatus("error");
      setMessage(
        `Online booking is being configured. Please email ${siteConfig.email}.`,
      );
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setErrors({});
      setStatus("success");
      setMessage("Thanks. We received your request and will reply shortly.");
    } catch {
      setStatus("error");
      setMessage(
        `We could not send your request. Please email ${siteConfig.email}.`,
      );
    }
  }

  return (
    <section id="contact" className="section-shell contact-section">
      <Container className="contact-layout">
        <Reveal className="contact-copy">
          <p className="eyebrow">Start here</p>
          <h2>Tell us where you want to go next.</h2>
          <p>
            Share your current situation and target. We will reply with
            practical advice, timing, and a clear quote.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="contact-email">
            <EnvelopeSimpleIcon size={21} weight="duotone" aria-hidden="true" />
            {siteConfig.email}
          </a>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.1}>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="company"
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                label="Name"
                name="name"
                autoComplete="name"
                required
                error={errors.name}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                required
                error={errors.email}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                label="Your situation"
                name="situation"
                required
                error={errors.situation}
              >
                <option value="">Choose one</option>
                <option>Starting out</option>
                <option>Returning to work</option>
                <option>Changing careers</option>
                <option>Looking for a new role</option>
              </SelectField>
              <SelectField
                label="Service"
                name="service"
                required
                error={errors.service}
              >
                <option value="">Choose one</option>
                <option>CV refresh</option>
                <option>CV and LinkedIn</option>
                <option>LinkedIn optimization</option>
                <option>Not sure yet</option>
              </SelectField>
            </div>
            <TextareaField
              label="What would you like help with?"
              name="message"
              helper="Tell us about your target roles, timeline, or the part of your application that feels unclear."
              required
              error={errors.message}
            />
            <div className="consent-row">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                aria-describedby={errors.consent ? "consent-error" : undefined}
              />
              <label htmlFor="consent">
                I agree that NeatCV may use this information to reply to my
                request.
              </label>
            </div>
            {errors.consent && (
              <p id="consent-error" className="field-error" role="alert">
                {errors.consent}
              </p>
            )}
            <button
              className="button button-primary w-full sm:w-auto"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Book a review"}
              {status !== "submitting" && (
                <ArrowRightIcon size={18} weight="bold" aria-hidden="true" />
              )}
            </button>
            <div
              className={`form-status ${status}`}
              role="status"
              aria-live="polite"
            >
              {message}
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
