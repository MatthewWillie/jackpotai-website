/**
 * Utility functions for structured data schema generation
 * These functions can be used in both client and server components
 */

export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface HowToStep {
    name: string;
    text: string;
    url?: string;
    imageUrl?: string;
  }
  
  /**
   * Creates a FAQ Schema for structured data
   */
  export function createFAQSchema(faqs: FAQ[]) {
    return {
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
  }
  
  /**
   * Creates HowTo Schema for structured data
   */
  export function createHowToSchema({
    name,
    description,
    steps,
    totalTime,
    imageUrl,
    yield: resultYield,
    toolsRequired,
    materialsRequired,
    supply
  }: {
    name: string;
    description: string;
    steps: HowToStep[];
    totalTime?: string;
    imageUrl?: string;
    yield?: string;
    toolsRequired?: string[];
    materialsRequired?: string[];
    supply?: { name: string; quantity?: string; imageUrl?: string }[];
  }) {
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
  
    return howToSchema;
  }
  
  /**
   * Creates MobileApplication Schema for structured data
   */
  export function createAppSchema({
    name = "JackpotAI",
    description = "JackpotAI uses artificial intelligence to analyze lottery data and generate optimized number combinations for Powerball, Mega Millions, EuroMillions, and more.",
    operatingSystem = "iOS",
    applicationCategory = "UtilitiesApplication",
    price = "0",
    priceCurrency = "USD",
    ratingValue = "5.0",
    ratingCount = "4",
    reviewCount = "4",
    appStoreId = "6444195595",
    screenshots = []
  }: {
    name?: string;
    description?: string;
    operatingSystem?: string;
    applicationCategory?: string;
    price?: string;
    priceCurrency?: string;
    ratingValue?: string;
    ratingCount?: string;
    reviewCount?: string;
    appStoreId?: string;
    screenshots?: string[];
  } = {}) {
    const schema: any = {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": name,
      "description": description,
      "operatingSystem": operatingSystem,
      "applicationCategory": applicationCategory,
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": priceCurrency
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": ratingValue,
        "ratingCount": ratingCount,
        "reviewCount": reviewCount
      }
    };
  
    // Add App Store URL
    if (appStoreId) {
      schema.installUrl = `https://apps.apple.com/us/app/jackpotai/id${appStoreId}`;
    }
  
    // Add screenshots if available
    if (screenshots && screenshots.length > 0) {
      schema.screenshot = screenshots.map(url => ({
        "@type": "ImageObject",
        "url": url
      }));
    }
  
    return schema;
  }
  
  /**
   * Creates Review Schema for structured data
   */
  export function createReviewSchema({
    itemName,
    itemType = "MobileApplication",
    ratingValue,
    reviewBody,
    author,
    publishDate
  }: {
    itemName: string;
    itemType?: string;
    ratingValue: string;
    reviewBody: string;
    author: string;
    publishDate?: string;
  }) {
    // Define the schema type with an interface to include all possible properties
    interface ReviewSchemaType {
      "@context": string;
      "@type": string;
      itemReviewed: {
        "@type": string;
        name: string;
      };
      reviewRating: {
        "@type": string;
        ratingValue: string;
        bestRating: string;
      };
      reviewBody: string;
      author: {
        "@type": string;
        name: string;
      };
      datePublished?: string; // Make datePublished optional
    }
  
    // Create the schema object with the defined type
    const schema: ReviewSchemaType = {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": itemType,
        "name": itemName
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": ratingValue,
        "bestRating": "5"
      },
      "reviewBody": reviewBody,
      "author": {
        "@type": "Person",
        "name": author
      }
    };
  
    if (publishDate) {
      schema.datePublished = publishDate;
    }
  
    return schema;
  }
  
  /**
   * Creates BreadcrumbList Schema for structured data
   */
  export function createBreadcrumbSchema(items: {name: string; url: string}[]) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  }
  
  /**
   * Creates Organization Schema for structured data
   */
  export function createOrganizationSchema({
    name = "JackpotAI",
    url = "https://jackpotai.app",
    logo = "https://jackpotai.app/logo.png",
    sameAs = []
  }: {
    name?: string;
    url?: string;
    logo?: string;
    sameAs?: string[];
  } = {}) {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": name,
      "url": url,
      "logo": logo,
      "sameAs": sameAs
    };
  }