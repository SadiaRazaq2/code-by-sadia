import { Container } from "@/components/ui/Container";
// import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { contact } from "@/data/contact";

const details = [
  { label: "Phone", value: contact.phone, href: contact.phoneHref },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LinkedIn", value: "Sadia Razaq", href: contact.linkedin, external: true },
  { label: "Location", value: contact.location },
];

export function ProjectEnquiry() {
  return (
    <section aria-labelledby="enquiry-heading">
      <div className="bg-cream px-4 pb-12 pt-12 text-center sm:pb-16 sm:pt-16">
        <h2 id="enquiry-heading" className="mx-auto max-w-3xl font-display text-h2 font-bold">
          Let&apos;s create your <em className="italic text-gold-deep">next project</em> together
        </h2>
      </div>
      <div className="bg-forest pb-14 pt-12 text-cream sm:pb-16 sm:pt-16">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
            <div>
              <p className="eyebrow eyebrow-light">Contact</p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s talk about your <em className="italic text-gold">next project</em>
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-cream/80">
                Tell me what you need. I cover the website or application, and the SEO or Google Ads work when that is part of the brief.
              </p>
            </div>
            <div>
              {/* Enquiry form stays commented until the domain is live.
              <EnquiryForm />
              */}
              <ul className="grid gap-4 sm:grid-cols-2">
                {details.map((item) => (
                  <li key={item.label}>
                    <p className="text-sm font-semibold text-gold">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`mt-0.5 inline-block break-all text-lg ${item.label === "Phone" ? "underline decoration-gold/70 underline-offset-4 hover:decoration-gold" : "no-underline"}`}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-lg">{item.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
