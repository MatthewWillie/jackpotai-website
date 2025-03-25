// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script';
import { headers } from 'next/headers';
import { Analytics } from "@vercel/analytics/react"

// Optimize font loading with display swap
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap' // Improve font loading performance
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jackpotai.app'),
  title: 'JackpotAI - AI-Powered Lottery Number Generator',
  description: 'Generate smarter lottery number combinations with JackpotAI. Our AI analyzes historical data to provide optimized picks for Powerball, Mega Millions, EuroMillions, and more.',
  keywords: 'lottery app, lottery number generator, AI lottery predictions, Powerball numbers, Mega Millions picks, EuroMillions generator, lottery analysis, lottery probability, AI lottery app',
  authors: [{ name: 'Matthew Willie' }],
  creator: 'Matthew Willie',
  publisher: 'JackpotAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jackpotai.app',
    siteName: 'JackpotAI',
    title: 'JackpotAI - AI-Powered Lottery Number Generator',
    description: 'Use artificial intelligence to generate smarter lottery number combinations for better winning odds.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JackpotAI App Preview - AI-Powered Lottery Number Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JackpotAI - AI-Powered Lottery Number Generator',
    description: 'Use artificial intelligence to generate smarter lottery number combinations for better winning odds.',
    images: ['/twitter-image.jpg'],
    creator: '@jackpotai_app',
  },
  appleWebApp: {
    title: 'JackpotAI',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  // Added verification metadata for search engines
  verification: {
    google: 'google-verification-code', // Replace with your actual verification code
    yandex: 'yandex-verification-code', // Replace with your actual verification code
    other: {
      'baidu': 'baidu-verification-code', // Replace if you need it
    }
  },
  // Added alternates for different languages (if you support them)
  alternates: {
    canonical: 'https://jackpotai.app', // Will be dynamically updated
    languages: {
      'en-US': 'https://jackpotai.app',
      // Add other languages if your app supports them
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set a default canonical URL - the dynamic approach is causing TypeScript errors
  const canonicalUrl = 'https://jackpotai.app';

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* App store link for iOS */}
        <meta name="apple-itunes-app" content="app-id=6444195595" />
        
        {/* Dynamic canonical tag */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Preconnect to domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "JackpotAI",
              "url": "https://jackpotai.app/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://jackpotai.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* SoftwareApplication Schema */}
        <Script
          id="software-app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "JackpotAI",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "iOS",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "ratingCount": "4",
                "reviewCount": "4"
              },
              "developer": {
                "@type": "Organization",
                "name": "JackpotAI",
                "url": "https://jackpotai.app"
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JackpotAI",
              "url": "https://jackpotai.app",
              "logo": "https://jackpotai.app/logo.png",
              "sameAs": [
                "https://twitter.com/jackpotai_app",
                // Add other social media profiles if available
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/70 backdrop-blur-sm py-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-4">JackpotAI</h4>
            <p className="text-gray-400 text-sm">
              JackpotAI uses artificial intelligence to analyze lottery data and generate optimized number combinations for popular lottery games like Powerball, Mega Millions, EuroMillions, and more.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/#screenshots" className="text-gray-400 hover:text-white transition-colors">Screenshots</Link></li>
                <li><Link href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="/#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <nav aria-label="Resource Navigation">
              <ul className="space-y-2 text-sm">
                <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><a href="https://apps.apple.com/us/app/jackpotai/id6444195595" className="text-gray-400 hover:text-white transition-colors" rel="noopener">Download</a></li>
                <li><a href="mailto:support@jackpotai.app" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} JackpotAI. All rights reserved.</p>
          <p className="mt-2">
            JackpotAI is not affiliated with or endorsed by any official lottery organization. Please play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}