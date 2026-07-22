import { siteConfig } from "@/lib/site";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
};

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CV writing and LinkedIn profile optimization",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  areaServed: "Worldwide",
  description: siteConfig.description,
};

export function createFaqJsonLd(
  faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
