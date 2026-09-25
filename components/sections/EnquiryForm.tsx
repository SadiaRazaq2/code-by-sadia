"use client";

import { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/contact";

const interests = [
  "Full-stack development",
  "Technical SEO",
  "Google Ads",
  "WordPress",
  "Website optimization",
];

const field =
  "mt-1.5 w-full rounded-2xl bg-forest-deep px-4 py-3 text-base text-cream outline-none ring-1 ring-white/10 placeholder:text-cream/45 focus-visible:ring-gold";

export function EnquiryForm({ formId = "project-form", fill = false }: { formId?: string; fill?: boolean }) {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const country = String(data.get("country") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      `Interested in: ${interest}`,
      country ? `Country: ${country}` : "",
      "",
      message,
    ].filter((line, index, all) => line !== "" || all[index - 1] !== "");

    const href = `mailto:${contact.email}?subject=${encodeURIComponent(`Project enquiry from ${name}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
  }

  const fields = (
    <>
      <label className="block text-sm font-semibold text-cream">
        Your name <span className="text-gold">*</span>
        <input className={field} name="name" type="text" autoComplete="name" required placeholder="Your name" />
      </label>
      <label className="block text-sm font-semibold text-cream">
        Email <span className="text-gold">*</span>
        <input className={field} name="email" type="email" autoComplete="email" required placeholder="you@email.com" />
      </label>
      <label className="block text-sm font-semibold text-cream">
        Phone
        <input className={field} name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" />
      </label>
      <label className="block text-sm font-semibold text-cream">
        I&apos;m interested in <span className="text-gold">*</span>
        <select className={field} name="interest" required defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {interests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold text-cream sm:col-span-2">
        Country
        <input className={field} name="country" type="text" autoComplete="country-name" placeholder="Your country" />
      </label>
    </>
  );

  if (fill) {
    return (
      <form id={formId} className="flex h-full flex-col gap-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">{fields}</div>
        <label className="flex min-h-32 flex-1 flex-col text-sm font-semibold text-cream">
          <span>
            Your message <span className="text-gold">*</span>
          </span>
          <textarea className={`${field} min-h-32 flex-1 resize-y`} name="message" required placeholder="Tell me about the project" />
        </label>
        <div className="flex justify-center">
          <Button type="submit" className="w-full justify-center sm:w-auto">
            Send message
          </Button>
        </div>
      </form>
    );
  }

  return (
    <form id={formId} className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
      {fields}
      <label className="block text-sm font-semibold text-cream sm:col-span-2">
        Your message <span className="text-gold">*</span>
        <textarea className={`${field} min-h-32 resize-y`} name="message" required placeholder="Tell me about the project" />
      </label>
      <div className="sm:col-span-2 sm:flex sm:justify-center">
        <Button type="submit" className="w-full justify-center sm:w-auto">
          Send message
        </Button>
      </div>
    </form>
  );
}
