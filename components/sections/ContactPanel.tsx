// import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contact, resumes } from "@/data/contact";

const details = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Location", value: contact.location },
  { label: "LinkedIn", value: contact.linkedin, href: contact.linkedin, external: true },
  { label: "Phone", value: contact.phone, href: contact.phoneHref },
];

function ContactActions({ email = true }: { email?: boolean }) {
  return (
    <div className={email ? "mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" : "flex flex-row flex-nowrap items-center gap-3"}>
      {email ? (
        <a href={`mailto:${contact.email}`} className="btn-primary w-full justify-center sm:w-auto">
          <span className="btn-primary-label">Email Me</span>
          <span className="btn-primary-icon">
            <Arrow />
          </span>
        </a>
      ) : null}
      <a
        href={contact.linkedin}
        className={`btn-ghost justify-center ${email ? "w-full sm:w-auto" : "h-[3.6875rem] shrink-0"}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      {resumes.map((resume) => (
        <Button
          key={resume.href}
          href={resume.href}
          variant="ghost"
          download={resume.fileName}
          className={email ? "w-full justify-center sm:w-auto" : "h-[3.6875rem] shrink-0 justify-center"}
        >
          {resume.label}
        </Button>
      ))}
    </div>
  );
}

function ContactDetails() {
  return (
    <dl className="grid gap-5">
      {details.map((item) => (
        <div key={item.label}>
          <dt className="text-sm font-semibold text-gold">{item.label}</dt>
          <dd className="mt-1 text-base sm:text-lg">
            {item.href ? (
              <a
                href={item.href}
                className={`break-all ${item.label === "Phone" ? "underline decoration-gold/70 underline-offset-4 hover:decoration-gold" : "no-underline"}`}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ContactPanel({
  titleLevel = "h2",
  withForm = false,
}: {
  titleLevel?: "h1" | "h2";
  withForm?: boolean;
}) {
  const Title = titleLevel;

  return (
    <section className="section reveal bg-forest text-cream" id="contact" aria-labelledby="contact-heading">
      <Container>
        {withForm ? (
          <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
            <div className="flex flex-col">
              <p className="eyebrow eyebrow-light">Contact</p>
              <Title id="contact-heading" className="mt-3 font-display text-h2 font-bold text-cream">
                Let&apos;s Work Together
              </Title>
              <p className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-4xl">{contact.name}</p>
              <p className="mt-1 font-display text-lg font-semibold text-gold sm:text-xl">{contact.role}</p>
              <div className="mt-8">
                <ContactActions email={false} />
              </div>
            </div>
            <div>
              {/* Enquiry form stays commented until the domain is live.
              <EnquiryForm formId="contact-form" fill />
              */}
              <ContactDetails />
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16">
              <div>
                <p className="eyebrow eyebrow-light">Contact</p>
                <Title id="contact-heading" className="mt-3 font-display text-h2 font-bold text-cream">
                  Let&apos;s Work Together
                </Title>
                <p className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-4xl">{contact.name}</p>
                <p className="mt-1 font-display text-lg font-semibold text-gold sm:text-xl">{contact.role}</p>
              </div>
              <ContactDetails />
            </div>
            <ContactActions />
          </>
        )}
      </Container>
    </section>
  );
}
