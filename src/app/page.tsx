import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Audiences } from "@/components/sections/Audiences";
import { ContactCta } from "@/components/sections/ContactCta";
import { Deliverables } from "@/components/sections/Deliverables";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Audiences />
        <Services />
        <Process />
        <Deliverables />
        <Pricing />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
