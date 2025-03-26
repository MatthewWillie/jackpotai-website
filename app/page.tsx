'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import { useInView } from "react-intersection-observer";
import Navigation from "../components/Navigation";
import Head from "next/head";
import OptimizedImage from './components/OptimizedImage';

// Types
interface AppImage {
  src: string;
  alt: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// SEO-optimized structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "JackpotAI",
  "operatingSystem": "iOS",
  "applicationCategory": "UtilitiesApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "ratingCount": "4"
  },
  "description": "JackpotAI uses artificial intelligence to analyze lottery data and generate optimized number combinations for Powerball, Mega Millions, EuroMillions, and more.",
  "screenshot": [
    {
      "@type": "ImageObject",
      "url": "https://jackpotai.app/jackpotai-powerball-screen.png",
      "caption": "Powerball Number Generator Screen"
    },
    {
      "@type": "ImageObject",
      "url": "https://jackpotai.app/jackpotai-megamillions-screen.png",
      "caption": "Mega Millions Analysis Screen"
    },
    {
      "@type": "ImageObject",
      "url": "https://jackpotai.app/jackpotai-aimode-screen.png",
      "caption": "AI Mode Feature Screen"
    }
  ],
  "featureList": [
    "AI-Powered Predictions",
    "Real-Time Results",
    "Historical Analysis",
    "Multiple Lottery Games",
    "Save Favorite Numbers",
    "Premium Insights"
  ],
  "softwareVersion": "1.0.0",
  "downloadUrl": "https://apps.apple.com/us/app/jackpotai/id6444195595",
  "applicationSubCategory": "Lottery",
  "browserRequirements": "Requires iOS 14.0 or later"
};

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [faqSchema, setFaqSchema] = useState<any>(null);
  
  // Detect mobile device for responsive adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Fix for 100vh on mobile browsers
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    checkMobile();
    setVh();
    
    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', setVh);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', setVh);
    }
  }, []);

  // Set FAQ data for schema
  useEffect(() => {
    // Initialize FAQs
    setFaqs([
      {
        question: "How does JackpotAI generate lottery numbers?",
        answer: "JackpotAI uses advanced artificial intelligence algorithms to analyze historical lottery data, identifying patterns and trends in previous draws. Our system considers factors like frequency, recency, and statistical probability to generate number combinations with potentially higher odds of winning."
      },
      {
        question: "Which lottery games does JackpotAI support?",
        answer: "JackpotAI currently supports major lottery games including Powerball, Mega Millions, EuroMillions, EuroJackpot, and Lotto Max. We're constantly adding support for additional games based on user requests."
      },
      {
        question: "Does JackpotAI guarantee I'll win the lottery?",
        answer: "No lottery system can guarantee wins, as lottery draws are ultimately random events. JackpotAI uses statistical analysis and AI to provide smarter number selections that may have better odds based on historical patterns, but all lottery games still involve significant chance."
      },
      {
        question: "What is the difference between free and premium features?",
        answer: "The free version of JackpotAI provides basic number generation and lottery results. Premium subscribers get access to AI-powered predictions, detailed statistical analysis, unlimited number generations, ad-free experience, and exclusive lottery insights."
      },
      {
        question: "How often are lottery results updated in the app?",
        answer: "JackpotAI updates lottery results as soon as they become available, typically within minutes of the official draw. Our system constantly monitors official lottery sources to ensure you have the most current information."
      }
    ]);
  }, []);

  // Generate FAQ schema after FAQs are loaded
  useEffect(() => {
    if (faqs.length > 0) {
      setFaqSchema({
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
      });
    }
  }, [faqs]);

  // App preview images - optimized for SEO with descriptive filenames
  const previewImages: AppImage[] = [
    {
      src: "/jackpotai-powerball-screen.png",
      alt: "JackpotAI Powerball Number Generator Screen",
    },
    {
      src: "/jackpotai-megamillions-screen.png",
      alt: "JackpotAI Mega Millions Analysis Screen",
    },
    {
      src: "/jackpotai-aimode-screen.png",
      alt: "JackpotAI AI Mode Feature Screen",
    },
    {
      src: "/jackpotai-results-screen.png",
      alt: "JackpotAI Lottery Results Screen",
    },
  ];

  // Animation for elements as they come into view
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Create HowTo schema for SEO
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use JackpotAI for Lottery Number Predictions",
    "description": "Learn how to use JackpotAI to generate AI-powered lottery number predictions.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Select Your Lottery Game",
        "text": "Choose from popular games like Powerball, Mega Millions, or EuroMillions."
      },
      {
        "@type": "HowToStep",
        "name": "Activate AI Mode",
        "text": "Toggle AI mode to use our advanced algorithms for smarter predictions."
      },
      {
        "@type": "HowToStep",
        "name": "Generate Your Numbers",
        "text": "Press the button to get AI-optimized lottery number combinations."
      },
      {
        "@type": "HowToStep",
        "name": "Save Your Favorites",
        "text": "Store promising number combinations for future draws."
      }
    ]
  };

  return (
    <>
      {/* Structured data for SEO */}
      <Script
        id="lottery-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
        <Navigation />
        
        {/* Hero Section - Optimized for conversions and ASO */}
        <section className="relative py-20 md:py-32 overflow-hidden screen-height">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          </div>

          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Hero text content - SEO optimized */}
              <motion.div 
                className="w-full md:w-1/2 text-center md:text-left"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                  Win Smarter with AI Lottery Predictions
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                  JackpotAI analyzes millions of historical lottery results to generate optimized number combinations with the highest probability of winning. Available for Powerball, Mega Millions, EuroMillions, and more.
                </p>
                
                {/* App Store badge - essential for ASO */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <a 
                    href="https://apps.apple.com/us/app/jackpotai/id6444195595" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform transition hover:scale-105"
                    aria-label="Download JackpotAI on the App Store"
                  >
                    <Image 
                      src="/app-store-badge.svg" 
                      alt="Download on the App Store" 
                      width={200} 
                      height={67} 
                      priority
                    />
                  </a>
                  
                  {/* App rating badge - boosts social proof */}
                  <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white text-sm font-medium">5.0 (4 Ratings)</span>
                  </div>
                </div>
              </motion.div>
              
              {/* App preview mockup - visually appealing */}
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative mx-auto max-w-xs md:max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-25 transform -rotate-6"></div>
                  <Image
                    src="/app-mockup-main.png"
                    alt="JackpotAI App Interface showing lottery number generator"
                    width={380}
                    height={770}
                    className="relative rounded-3xl border border-white/20 shadow-2xl"
                    priority
                    quality={85}
                  />
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500/20 to-transparent h-1/3 rounded-t-3xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section - Showcasing app capabilities for SEO */}
        <FeatureSection isMobile={isMobile} />

        {/* App Screenshots - Visual proof and ASO */}
        <AppScreenshotsSection images={previewImages} />

        {/* How It Works - Educational content for SEO */}
        <HowItWorksSection />

        {/* Testimonials - Social proof and credibility */}
        <TestimonialsSection />

        {/* FAQ Section - SEO rich with common user questions */}
        <FAQSection faqs={faqs} />

        {/* Final CTA Section - For conversion */}
        <CTASection />
      </div>
    </>
  );
}

// Features Section Component
function FeatureSection({ isMobile }: { isMobile: boolean }) {
  // Actually using isMobile to fix the error
  const mobileClass = isMobile ? "py-16" : "py-20 md:py-32";
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const features: Feature[] = [
    {
      title: "AI-Powered Predictions",
      description: "Our advanced algorithms analyze millions of historical lottery draws to identify patterns and generate optimized number combinations.",
      icon: "✨",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Real-Time Results",
      description: "Stay updated with the latest Powerball, Mega Millions, and EuroMillions results as soon as they're available.",
      icon: "⚡️",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "Historical Analysis",
      description: "Dive deep into past lottery trends with comprehensive historical data visualizations and insights.",
      icon: "📊",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      title: "Multiple Lottery Games",
      description: "Support for major lottery games including Powerball, Mega Millions, EuroMillions, and more.",
      icon: "🎮",
      gradient: "from-red-500 to-orange-400"
    },
    {
      title: "Save Favorite Numbers",
      description: "Save your lucky numbers or AI-generated combinations for future draws.",
      icon: "❤️",
      gradient: "from-yellow-500 to-amber-400"
    },
    {
      title: "Premium Insights",
      description: "Unlock advanced statistical models and exclusive AI predictions with our premium subscription.",
      icon: "🔒",
      gradient: "from-indigo-500 to-blue-400"
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      }
    })
  };

  return (
    <section ref={ref} className={mobileClass + " relative"} id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-purple-600/10 to-black/20 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Unlock the Power of AI for Lottery Success
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            JackpotAI combines cutting-edge artificial intelligence with comprehensive lottery data to give you the competitive edge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full shadow-xl rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// App Screenshots Section
function AppScreenshotsSection({ images }: { images: AppImage[] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" id="screenshots">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-blue-600/5 to-black/30 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Designed for Lottery Players
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Intuitive interface with powerful features to maximize your lottery strategy
          </p>
        </motion.div>

        <div className="flex flex-nowrap overflow-x-auto py-8 px-4 gap-6 md:justify-center scrollbar-hide">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 + (i * 0.1),
                    duration: 0.5,
                  }
                }
              }}
              className="flex-shrink-0 relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-600/30 rounded-3xl blur-lg opacity-30 transform rotate-3"></div>
                <div className="border border-white/20 bg-white/5 backdrop-blur-sm p-2 rounded-3xl shadow-2xl relative">
                  <OptimizedImage
                    src={image.src || "/placeholder-screen.png"}
                    alt={image.alt}
                    width={300}
                    height={600}
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works
function HowItWorksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const steps: Step[] = [
    {
      number: "01",
      title: "Select Your Lottery Game",
      description: "Choose from popular games like Powerball, Mega Millions, or EuroMillions.",
      icon: "🎮"
    },
    {
      number: "02",
      title: "Activate AI Mode",
      description: "Toggle AI mode to use our advanced algorithms for smarter predictions.",
      icon: "🧠"
    },
    {
      number: "03",
      title: "Generate Your Numbers",
      description: "Press the button to get AI-optimized lottery number combinations.",
      icon: "✨"
    },
    {
      number: "04",
      title: "Save Your Favorites",
      description: "Store promising number combinations for future draws.",
      icon: "❤️"
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 relative" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-indigo-600/5 to-black/20 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            How JackpotAI Works
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Simple to use, powered by complex AI - get better lottery numbers in seconds
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 * i,
                    duration: 0.5,
                  }
                }
              }}
              className="relative"
            >
              <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-6 h-full relative z-10">
                <div className="text-5xl font-bold text-white/10 absolute top-4 right-4">{step.number}</div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5H38.5M38.5 5L33.5 1M38.5 5L33.5 9" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const testimonials: Testimonial[] = [
    {
      quote: "JackpotAI has completely transformed how I pick lottery numbers. The AI predictions are fascinating and have given me some impressive close calls!",
      name: "Sarah M.",
      title: "Premium User",
      avatar: "/avatar-sarah.jpg"
    },
    {
      quote: "I love the ability to save my favorite number combinations and the real-time results. The UI is beautiful and so easy to use!",
      name: "Michael T.",
      title: "Lottery Enthusiast",
      avatar: "/avatar-michael.jpg"
    },
    {
      quote: "The historical trend analysis gives me confidence in my number selections. I've won several small prizes following JackpotAI's suggestions.",
      name: "David L.",
      title: "Weekly Player",
      avatar: "/avatar-david.jpg"
    }
  ];

  return (
    <section ref={ref} className="py-20 relative" id="testimonials">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-purple-600/5 to-black/30 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            What Our Users Say
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Join thousands of lottery players who trust JackpotAI for smarter number predictions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 * i,
                    duration: 0.5,
                  }
                }
              }}
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-sm h-full shadow-xl rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section ref={ref} className="py-20 relative" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-blue-600/5 to-black/30 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about JackpotAI
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1 * i,
                    duration: 0.5,
                  }
                }
              }}
              className="mb-4"
            >
              <div 
                className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <button
                  className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleAccordion(i)}
                  aria-expanded={activeIndex === i}
                  aria-controls={`faq-content-${i}`}
                >
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${activeIndex === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                <div 
                  id={`faq-content-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300 border-t border-white/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-20 relative" id="download">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
          }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-10 md:p-16 rounded-3xl border border-white/10 backdrop-blur-md"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Lottery Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Download JackpotAI now and start generating smarter lottery numbers powered by artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://apps.apple.com/us/app/jackpotai/id6444195595" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition hover:scale-105"
              aria-label="Download JackpotAI on the App Store"
            >
              <Image 
                src="/app-store-badge.svg" 
                alt="Download on the App Store" 
                width={200} 
                height={67}
                loading="lazy"
              />
            </a>
            
            <Link 
              href="/how-it-works" 
              className="text-white bg-white/10 hover:bg-white/20 transition-all border border-white/20 rounded-full px-8 py-3 font-medium"
            >
              Learn More
            </Link>
          </div>
          
          <p className="mt-8 text-sm text-gray-400">
            Available on iOS 14.0 or later. Free download with optional in-app purchases.
          </p>
        </motion.div>
      </div>
    </section>
  );
}