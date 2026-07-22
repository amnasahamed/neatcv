export const siteConfig = {
  name: "NeatCV",
  description:
    "Professional ATS-friendly CV writing and LinkedIn optimization for freshers, returners, and career changers.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://neatcv.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@neatcv.com",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const services = [
  {
    title: "ATS-friendly CV",
    description:
      "A clear, keyword-aware CV that shows recruiters what you can do and why it matters.",
    includes: [
      "Role-focused structure and positioning",
      "Achievement-led writing",
      "ATS-safe formatting",
      "Two rounds of refinements",
    ],
  },
  {
    title: "LinkedIn optimization",
    description:
      "A complete profile rewrite that makes your experience easier to find and understand.",
    includes: [
      "Headline and About section",
      "Experience and skills optimization",
      "Keyword positioning",
      "Profile improvement checklist",
    ],
  },
];

export const faqs = [
  {
    question: "Will my CV be compatible with ATS software?",
    answer:
      "Yes. We use clear headings, simple structure, standard section labels, and role-relevant language so parsing software can read your CV correctly.",
  },
  {
    question: "Can you help if I have little work experience?",
    answer:
      "Yes. We can build a strong CV from internships, projects, coursework, volunteering, part-time work, and transferable skills.",
  },
  {
    question: "How do you handle a career break?",
    answer:
      "We present your experience honestly, explain the break with appropriate context, and keep the focus on your current strengths and direction.",
  },
  {
    question: "Can you tailor my CV to a specific role?",
    answer:
      "Yes. Share the job descriptions you are targeting and we will align the structure, keywords, and emphasis with those opportunities.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Most projects are completed within five working days after we receive your information. We will confirm timing before work begins.",
  },
];
