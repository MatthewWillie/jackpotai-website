'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
  mainEntity?: boolean;
}

export default function FAQSchema({ faqs, mainEntity = true }: FAQSchemaProps) {
  const [faqSchema, setFaqSchema] = useState<any>(null);

  useEffect(() => {
    // Create the FAQ schema structure
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    setFaqSchema(schema);
  }, [faqs]);

  if (!faqSchema) return null;

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}