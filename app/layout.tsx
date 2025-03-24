// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link'; // Added Link import

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JackpotAI - AI-Powered Lottery Number Generator',
  description: 'Generate smarter lottery number combinations with JackpotAI. Our AI analyzes historical data to provide optimized picks for Powerball, Mega Millions, EuroMillions, and more.',
  keywords: 'lottery app, lottery number generator, AI lottery predictions, Powerball numbers, Mega Millions picks, EuroMillions generator, lottery analysis',
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
  viewport: 'width=device-width, initial-scale=1',
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
        alt: 'JackpotAI App Preview',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-itunes-app" content="app-id=6444195595" />
        <script
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
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/70 backdrop-blur-sm py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">JackpotAI</h4>
            <p className="text-gray-400 text-sm">
              JackpotAI uses artificial intelligence to analyze lottery data and generate optimized number combinations for popular lottery games.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              {/* Fixed: Changed <a> to <Link> for internal navigation */}
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><a href="https://apps.apple.com/us/app/jackpotai/id6444195595" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              For support or inquiries:
            </p>
            <a href="mailto:support@jackpotai.app" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
              support@jackpotai.app
            </a>
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