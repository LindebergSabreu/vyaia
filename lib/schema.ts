type ServiceSchemaInput = {
  name: string;
  description: string;
  url?: string;
};

type FAQSchemaInput = {
  pergunta?: string;
  resposta?: string;
  question?: string;
  answer?: string;
};

type BreadcrumbSchemaInput = {
  name: string;
  url: string;
};

export const generateServiceSchema = (service: ServiceSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Vya IA",
    url: "https://vyaia.com.br",
  },
  ...(service.url ? { url: service.url } : {}),
});

export const generateFAQSchema = (faqs: FAQSchemaInput[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.pergunta ?? faq.question ?? "",
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.resposta ?? faq.answer ?? "",
    },
  })),
});

export const generateBreadcrumbSchema = (items: BreadcrumbSchemaInput[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
