export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 text-white px-4">
      {/* Navbar */}
      <nav className="w-full max-w-5xl flex justify-between items-center py-6 px-6 bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-yellow-400">JackpotAI</h1>
        <div className="space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition">How It Works</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Results</a>
          <a href="#" className="text-gray-300 hover:text-white transition">FAQ</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center mt-12 text-center">
        <img src="/logo.png" alt="JackpotAI Logo" className="w-40 md:w-52 mb-6 drop-shadow-lg" />

        <h2 className="text-4xl font-extrabold tracking-wide">AI-Powered Lottery Number Generator</h2>
        <p className="text-lg text-gray-300 mt-3 max-w-lg">
          Boost your chances of winning with smart number predictions powered by AI.
        </p>

        <div className="mt-6 flex space-x-4">
  {/* App Store Button */}
  <a 
    href="https://apps.apple.com/us/app/jackpotai/id6444195595" 
    target="_blank" 
    rel="noopener noreferrer"
    className="px-5 py-1 bg-black text-white text-lg font-semibold rounded-lg shadow-md flex items-center space-x-3 hover:bg-gray-800 transition"
  >
    <img src="/apple-logo.svg" alt="Apple Logo" className="w-20 h-20" />
    <span className="text-xl">Download on the App Store</span>
  </a>
</div>

      </main>
    </div>
  );
}
