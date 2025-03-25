'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

interface HowToStep {
  name: string;
  text: string;
  url?: string;
  imageUrl?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration format (e.g., "PT30M" for 30 minutes)
  imageUrl?: string;
  yield?: string;
  toolsRequired?: string[];
  materialsRequired?: string[];
  supply?: { name: string; quantity?: string; imageUrl?: string }[];
}

export default function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  imageUrl,
  yield: resultYield,
  toolsRequired,
  materialsRequired,
  supply
}: HowToSchemaProps) {
  const [schema, setSchema] = useState<any>(null);

  useEffect(() => {
    // Create the HowTo schema structure
    const howToSchema: any = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": name,
      "description": description,
      "step": steps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text,
        ...(step.url ? { "url": step.url } : {}),
        ...(step.imageUrl ? { 
          "image": {
            "@type": "ImageObject",
            "url": step.imageUrl
          } 
        } : {})
      }))
    };

    // Add optional properties if provided
    if (totalTime) {
      howToSchema.totalTime = totalTime;
    }

    if (imageUrl) {
      howToSchema.image = {
        "@type": "ImageObject",
        "url": imageUrl
      };
    }

    if (resultYield) {
      howToSchema.yield = resultYield;
    }

    if (toolsRequired && toolsRequired.length > 0) {
      howToSchema.tool = toolsRequired.map(tool => ({
        "@type": "HowToTool",
        "name": tool
      }));
    }

    if (materialsRequired && materialsRequired.length > 0) {
      howToSchema.supply = materialsRequired.map(material => ({
        "@type": "HowToSupply",
        "name": material
      }));
    }

    if (supply && supply.length > 0) {
      // If both materialsRequired and supply are provided, merge them
      howToSchema.supply = [
        ...(howToSchema.supply || []),
        ...supply.map(item => ({
          "@type": "HowToSupply",
          "name": item.name,
          ...(item.quantity ? { "requiredQuantity": item.quantity } : {}),
          ...(item.imageUrl ? { 
            "image": {
              "@type": "ImageObject",
              "url": item.imageUrl
            } 
          } : {})
        }))
      ];
    }

    setSchema(howToSchema);
  }, [name, description, steps, totalTime, imageUrl, resultYield, toolsRequired, materialsRequired, supply]);

  if (!schema) return null;

  return (
    <Script
      id="howto-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}