// app/how-it-works/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
  title: 'How JackpotAI Works | AI Lottery Number Generator',
  description: 'Learn how JackpotAI uses artificial intelligence to analyze lottery data and generate optimized number combinations for Powerball, Mega Millions, and more.',
  keywords: 'lottery number generator, AI lottery predictions, how lottery AI works, lottery algorithms, Powerball number picker',
};

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              How JackpotAI Works
            </h1>
            <p className="text-xl text-gray-300">
              A deep dive into our AI-powered lottery number generation technology
            </p>
          </div>

          {/* Technology Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                AI-Powered Analysis
              </h2>
              <p className="text-gray-300 mb-4">
                JackpotAI uses advanced machine learning algorithms to analyze millions of historical lottery draws, identifying patterns that might not be obvious to human observers.
              </p>
              <p className="text-gray-300 mb-4">
                Our AI engine doesn't just look at frequency - it examines complex relationships between numbers, positional patterns, and temporal trends to generate optimized combinations.
              </p>
              <p className="text-gray-300">
                While no system can predict random draws with certainty, our approach provides mathematically sound combinations based on historical data analysis.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform rotate-3"></div>
              <Image
                src="/how-it-works-ai.png"
                alt="JackpotAI's artificial intelligence algorithm visualization"
                width={500}
                height={400}
                className="relative rounded-2xl border border-white/20 shadow-xl"
              />
            </div>
          </div>

          {/* Step-by-Step Process */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              The JackpotAI Process
            </h2>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-1 order-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold">1</div>
                    <h3 className="text-xl md:text-2xl font-semibold ml-4">Data Collection</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Our system continuously collects and updates lottery draw results from official sources around the world. This comprehensive database forms the foundation of our analysis.
                  </p>
                  <p className="text-gray-300">
                    For games like Powerball and Mega Millions, we maintain records going back decades, giving our AI models rich datasets to learn from.
                  </p>
                </div>
                <div className="md:order-2 order-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform -rotate-2"></div>
                  <Image
                    src="/data-collection.png"
                    alt="JackpotAI data collection visualization"
                    width={500}
                    height={400}
                    className="relative rounded-2xl border border-white/20 shadow-xl"
                  />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform rotate-2"></div>
                  <Image
                    src="/pattern-analysis.png"
                    alt="JackpotAI pattern recognition algorithm visualization"
                    width={500}
                    height={400}
                    className="relative rounded-2xl border border-white/20 shadow-xl"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-xl font-bold">2</div>
                    <h3 className="text-xl md:text-2xl font-semibold ml-4">Pattern Recognition</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Our AI models identify statistical patterns including frequently drawn numbers, typical gaps between appearances, positional tendencies, and combinations that appear more often than random chance would suggest.
                  </p>
                  <p className="text-gray-300">
                    The algorithm also identifies "cold" numbers that are statistically overdue for appearance based on their typical frequency patterns.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-1 order-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-xl font-bold">3</div>
                    <h3 className="text-xl md:text-2xl font-semibold ml-4">Probability Modeling</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    JackpotAI uses sophisticated probability modeling to weigh various statistical factors and generate number combinations that balance "hot" numbers, "due" numbers, and game-specific patterns.
                  </p>
                  <p className="text-gray-300">
                    Our algorithms include balanced distribution functions to avoid common pitfalls in manual number selection, such as clustering or excessive patterns.
                  </p>
                </div>
                <div className="md:order-2 order-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform -rotate-2"></div>
                  <Image
                    src="/probability-model.png"
                    alt="JackpotAI probability modeling visualization"
                    width={500}
                    height={400}
                    className="relative rounded-2xl border border-white/20 shadow-xl"
                  />
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform rotate-2"></div>
                  <Image
                    src="/number-generation.png"
                    alt="JackpotAI number generation visualization"
                    width={500}
                    height={400}
                    className="relative rounded-2xl border border-white/20 shadow-xl"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">4</div>
                    <h3 className="text-xl md:text-2xl font-semibold ml-4">Number Generation</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    When you press the generate button, our AI delivers a customized set of numbers specifically optimized for your selected lottery game, considering all the unique rules and historical patterns of that game.
                  </p>
                  <p className="text-gray-300">
                    Each generation is unique, providing you with fresh combinations that maintain statistical relevance while offering variety in your lottery strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Game-Specific Analysis */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Game-Specific Analysis
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Powerball */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/powerball-icon.png"
                    alt="Powerball logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl font-semibold ml-3">Powerball</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our Powerball analysis examines the 5 white balls (1-69) and the Powerball (1-26) separately, recognizing the unique probability dynamics of each.
                </p>
                <p className="text-gray-300">
                  JackpotAI's algorithms account for Powerball's specific draw mechanics and historical patterns to generate optimized combinations.
                </p>
              </div>
              
              {/* Mega Millions */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/megamillions-icon.png"
                    alt="Mega Millions logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl font-semibold ml-3">Mega Millions</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  For Mega Millions, our system analyzes the 5 white balls (1-70) and the Mega Ball (1-25), accounting for the game's unique number distribution patterns.
                </p>
                <p className="text-gray-300">
                  Historical trend analysis has identified several statistically significant patterns specific to Mega Millions draws.
                </p>
              </div>
              
              {/* EuroMillions */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/euromillions-icon.png"
                    alt="EuroMillions logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl font-semibold ml-3">EuroMillions</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  EuroMillions analysis focuses on the 5 main numbers (1-50) and 2 Lucky Stars (1-12), with our algorithms capturing the unique statistical properties of European lottery systems.
                </p>
                <p className="text-gray-300">
                  JackpotAI's models identify subtle patterns in multiple ball selections that are particular to the EuroMillions format.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="mb-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Important Note</h2>
            <p className="text-gray-300 mb-4">
              While JackpotAI uses advanced statistical analysis and AI to generate number combinations with interesting statistical properties, it's important to remember that lottery draws are fundamentally random events.
            </p>
            <p className="text-gray-300 mb-4">
              No system, no matter how sophisticated, can predict random draws with certainty. JackpotAI aims to provide a more informed approach to number selection based on historical patterns, but winning is never guaranteed.
            </p>
            <p className="text-gray-300">
              Always play responsibly and within your means. JackpotAI is designed to enhance your lottery experience, not as a financial strategy.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Experience JackpotAI Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Download now and discover how AI-powered lottery analysis can transform your number selection strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://apps.apple.com/us/app/jackpotai/id6444195595" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition hover:scale-105"
              >
                <Image 
                  src="/app-store-badge.svg" 
                  alt="Download on the App Store" 
                  width={200} 
                  height={67}
                />
              </a>
              
              <Link href="/" legacyBehavior>
                <a className="text-white bg-white/10 hover:bg-white/20 transition-all border border-white/20 rounded-full px-8 py-3 font-medium">
                  Back to Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}