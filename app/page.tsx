// app/page.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Page-level SEO & ASO metadata
export const metadata = {
  title: "JackpotAI - AI-Powered Lottery Number Generator",
  description:
    "Boost your lottery winning chances with JackpotAI, an AI-driven lottery number generator using advanced machine learning.",
  keywords: [
    "Lottery",
    "AI",
    "JackpotAI",
    "Lottery Number Generator",
    "App Store",
    "iPhone",
    "Real-Time Updates",
  ],
  openGraph: {
    title: "JackpotAI - AI-Powered Lottery Number Generator",
    description:
      "Boost your lottery winning chances with JackpotAI, an AI-driven lottery number generator.",
    url: "https://yourdomain.com",
    images: ["/appIcon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JackpotAI - AI-Powered Lottery Number Generator",
    description:
      "Boost your lottery winning chances with JackpotAI, an AI-driven lottery number generator.",
    images: ["/appIcon.png"],
  },
};

export default function Home() {
  // List of your five preview images
  const previewImages = [
    "/Preview1.png",
    "/Preview3.png",
    "/Preview4.png",
    "/Preview6.png",
  ];

  return (
    <>
      {/* Glassmorphic Navigation Bar */}
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/20">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="JackpotAI Logo" width={55} height={55} priority />
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
        {/* Glassmorphic App Store Card */}
        <div className="w-250 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center">
  <div className="flex-shrink-0">
    <Image
      src="/appIcon.png"
      alt="JackpotAI App Icon"
      width={180} // Adjust width as needed
      height={180}
      className="rounded-3xl"
      priority
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


        <h1 className="text-5xl md:text-6xl font-extrabold mt-12 tracking-tight">
          AI-Powered Lottery Number Generator
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl">
          Boost your chances of winning with our AI-driven predictions and historical trend
          analysis.
        </p>

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
          <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl transition transform hover:-translate-y-1">
            <CardContent className="p-8 text-white">
              <h3 className="text-xl font-bold">Smart AI Predictions</h3>
              <p className="text-gray-300 mt-3">
                Our advanced AI analyzes past lottery results to provide optimal number
                combinations.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl transition transform hover:-translate-y-1">
            <CardContent className="p-8 text-white">
              <h3 className="text-xl font-bold">Real-Time Updates</h3>
              <p className="text-gray-300 mt-3">
                Stay updated with the latest lottery results and trends as they happen.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-lg rounded-2xl transition transform hover:-translate-y-1">
            <CardContent className="p-8 text-white">
              <h3 className="text-xl font-bold">Secure & Private</h3>
              <p className="text-gray-300 mt-3">
                Your data is encrypted and stored securely to protect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
          JackpotAI leverages state-of-the-art machine learning models to analyze lottery
          trends, generating numbers with the highest probability of success.
        </p>
      </section>

      {/* Download Section */}
      <section id="download" className="px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Get Started Today</h2>
        <p className="text-gray-400 mt-4 text-lg">
          Download the JackpotAI app now and start winning smarter.
        </p>
        <a
          href="https://apps.apple.com/us/app/jackpotai/id6444195595"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-12 py-6 rounded-full shadow-lg transition transform hover:scale-105">
            Download Now
          </Button>
        </a>
      </section>
    </>
  );
}
