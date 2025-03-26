'use client';

import Script from 'next/script';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
  mainEntity?: boolean; // Keep for backward compatibility
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  // Skip rendering if no FAQs are provided
  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Create the schema directly without useState/useEffect
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

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      // Add strategy to ensure the script is inserted at the right time
      strategy="afterInteractive"
    />
  );
}