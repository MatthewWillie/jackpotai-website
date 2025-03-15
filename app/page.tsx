// app/page.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Page-level SEO & ASO metadata
export const metadata = {
  title: "JackpotAI - AI-Powered Lottery Number Generator for Powerball & Mega Millions",
  description:
    "JackpotAI is the most advanced AI-powered lottery number generator. Get AI-driven Powerball & Mega Millions predictions based on historical data & trends.",
  keywords: [
    "lottery number generator",
    "AI lottery picks",
    "Powerball predictions",
    "Mega Millions AI",
    "JackpotAI",
    "lottery app",
    "best lottery strategy",
    "how to win the lottery",
  ],
  alternates: {
    canonical: "https://jackpotai.app",
  },
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "JackpotAI - AI Lottery Number Generator for Powerball & Mega Millions",
    description:
      "Win smarter! JackpotAI uses AI to generate winning lottery numbers based on historical trends.",
    url: "https://jackpotai.app",
    images: ["/appIcon.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JackpotAI - AI Lottery Number Generator",
    description:
      "Boost your winning chances with JackpotAI – AI-powered lottery number predictions for Powerball & Mega Millions.",
    images: ["/appIcon.png"],
  },
};

// JSON-LD Structured Data for SEO & ASO (Software Application)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JackpotAI",
  "operatingSystem": "iOS",
  "applicationCategory": "GameApplication",
  "screenshot": [
    "/Preview1.png",
    "/Preview3.png",
    "/Preview4.png",
    "/Preview6.png"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "ratingCount": "4"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

// JSON-LD Structured Data for Breadcrumbs
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://jackpotai.app"
    }
  ]
};

// JSON-LD Structured Data for FAQ
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does JackpotAI work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JackpotAI uses AI to analyze historical lottery data to find number trends and generate optimized lottery picks."
      }
    }
  ]
};

export default function Home() {
  const previewImages = [
    "/Preview1.png",
    "/Preview3.png",
    "/Preview4.png",
    "/Preview6.png",
  ];

  return (
    <>
      {/* Inject JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Deep Linking Meta for App Stores */}
      <meta name="apple-itunes-app" content="app-id=6444195595, app-argument=jackpotai://" />
      <meta name="google-play-app" content="app-id=com.jackpotai, app-argument=jackpotai://" />

      {/* Glassmorphic Navigation Bar */}
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/20">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="JackpotAI Logo" width={55} height={55} loading="lazy" />
            <h1 className="text-2xl font-bold tracking-wide">JackpotAI</h1>
          </div>
          <div className="space-x-6 hidden md:flex">
            <a href="#features" className="hover:text-gray-300 transition duration-300">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-gray-300 transition duration-300">
              How It Works
            </a>
            <a href="#download" className="hover:text-gray-300 transition duration-300">
              Download
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Clickable Glassmorphic App Store Card */}
        <a
          href="https://apps.apple.com/us/app/jackpotai/id6444195595"
          target="_blank"
          rel="noopener noreferrer"
          className="w-300 max-w-3xl mx-auto block"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center transition transform hover:scale-105 hover:bg-white/15 cursor-pointer">
            <div className="flex-shrink-0">
              <Image
                src="/appIcon.png"
                alt="JackpotAI App Icon"
                width={180}
                height={180}
                loading="lazy"
                className="rounded-3xl"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-left">
              <h2 className="text-3xl font-extrabold">JackpotAI</h2>
              <p className="text-gray-300 mt-1">AI Lottery Number Generator</p>
              <p className="text-blue-400 font-medium mt-1">by Matthew Willie</p>
              <p className="text-gray-400 mt-1">Designed for iPhone</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-xl">★★★★★</span>
                <span className="text-gray-400 ml-3">5.0 • 4 Ratings</span>
              </div>
              <p className="text-gray-400 mt-2">Free • Offers In-App Purchases</p>
            </div>
          </div>
        </a>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-12 tracking-tight">
          AI-Powered Lottery Number Generator
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl">
          Boost your chances of winning with our AI-driven predictions and historical trend analysis.
        </p>

        {/* Internal Linking for SEO */}
        <a href="#features" className="text-blue-400 underline mt-4 inline-block">
          Learn more about our AI predictions
        </a>

        {/* Preview Images in a Glassmorphic Grid */}
        <div className="mx-auto mt-12 flex flex-wrap justify-center gap-6">
          {previewImages.map((src, i) => (
            <div
              key={i}
              className="relative w-[220px] md:w-[220px] h-auto bg-white/10 border border-white/20 rounded-xl backdrop-blur-md p-2 shadow-lg transition transform hover:scale-105"
            >
              <Image
                src={src}
                alt={`App Preview ${i + 1}`}
                width={220}
                height={440}
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Download Button */}
        <a
          href="https://apps.apple.com/us/app/jackpotai/id6444195595"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-10 bg-blue-500 hover:bg-blue-600 text-white px-12 py-6 rounded-full shadow-lg transition transform hover:scale-110">
            Download the App
          </Button>
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose JackpotAI?</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Smart AI Predictions", description: "Our AI analyzes past lottery results to provide optimal number combinations." },
            { title: "Real-Time Updates", description: "Stay updated with the latest lottery results and trends as they happen." },
            { title: "Secure & Private", description: "Your data is encrypted and stored securely to protect your privacy." }
          ].map((feature, i) => (
            <Card key={i} className="border border-white/20 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl transition transform hover:-translate-y-1">
              <CardContent className="p-8 text-white">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-300 mt-3">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-6 max-w-3xl mx-auto text-left space-y-6">
          <details className="border border-white/20 p-4 rounded-lg">
            <summary className="font-semibold text-lg cursor-pointer">How does JackpotAI work?</summary>
            <p className="text-gray-300 mt-2">
              JackpotAI uses AI to analyze historical lottery data to find number trends and generate optimized lottery picks. Smarter picks means better chances of winning.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
