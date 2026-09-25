import { PageTitle } from "@/components/layout/PageTitle";
import { ContactPanel } from "@/components/sections/ContactPanel";

export function ContactView() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="h-12 bg-cream sm:h-20" aria-hidden="true" />
      <ContactPanel withForm />
    </>
  );
}
