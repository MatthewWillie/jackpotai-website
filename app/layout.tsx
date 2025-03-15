import './globals.css'; // Ensure Tailwind is applied

export const metadata = {
  title: "JackpotAI - AI-Powered Lottery Number Generator",
  description: "Boost your chances of winning with JackpotAI! Get AI-powered lottery number predictions and track results in real-time.",
  keywords: "lottery, AI lottery, number generator, Powerball, Mega Millions, lucky numbers, JackpotAI",
  authors: [{ name: "JackpotAI Team", url: "https://jackpotai.app" }],
  robots: "index, follow",
  appleItunesApp: "app-id=YOUR-APP-ID", // Replace with real App Store ID
  openGraph: {
    title: "JackpotAI - AI-Powered Lottery Number Generator",
    description: "Get AI-powered lottery predictions and track results in real-time. Download JackpotAI now!",
    url: "https://jackpotai.app",
    type: "website",
    images: [
      {
        url: "https://jackpotai.app/jackpotai-banner.png",
        width: 1200,
        height: 630,
        alt: "JackpotAI - AI-Powered Lottery Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jackpotai",
    title: "JackpotAI - AI-Powered Lottery Number Generator",
    description: "Boost your lottery chances with AI-driven number predictions. Download JackpotAI today!",
    images: ["https://jackpotai.app/jackpotai-banner.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "JackpotAI",
              operatingSystem: "iOS, Android",
              applicationCategory: "Game",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "5000",
              },
              offers: {
                "@type": "Offer",
                price: "0.00",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
