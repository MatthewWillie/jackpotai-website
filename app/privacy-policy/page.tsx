import Head from "next/head";

export const metadata = {
  title: "Privacy Policy - JackpotAI",
  description: "Read our privacy policy to understand how JackpotAI collects, uses, and protects your data.",
  alternates: {
    canonical: "https://jackpotai.app/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-white">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
      <p className="text-gray-300 text-center mb-4">Last Updated: March 2025</p>

      <section className="space-y-8">
        {/* Introduction */}
        <div>
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-gray-400 mt-2">
            Welcome to <strong>JackpotAI</strong>. Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website{" "}
            <a href="https://jackpotai.app" className="text-blue-400 underline">
              jackpotai.app
            </a>{" "}
            or use our mobile app.
          </p>
        </div>

        {/* Information We Collect */}
        <div>
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p className="text-gray-400 mt-2">We collect the following types of information:</p>
          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
            <li>
              <strong>Personal Information:</strong> Name, email address, and payment details (only if you subscribe to premium features).
            </li>
            <li>
              <strong>Usage Data:</strong> Interaction with our app, including lottery number generations and preferences.
            </li>
            <li>
              <strong>Device & Analytics:</strong> Device model, IP address, app version, and crash reports for debugging.
            </li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <p className="text-gray-400 mt-2">Your data helps us improve JackpotAI and provide better services. Specifically, we use it to:</p>
          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
            <li>Enhance the AI-powered lottery number generator.</li>
            <li>Analyze trends and improve user experience.</li>
            <li>Process transactions and provide customer support.</li>
            <li>Send app-related updates, if you opt in.</li>
          </ul>
        </div>

        {/* Data Sharing & Security */}
        <div>
          <h2 className="text-2xl font-semibold">4. Data Sharing & Security</h2>
          <p className="text-gray-400 mt-2">
            We <strong>never</strong> sell or trade your personal data. However, we may share information with:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
            <li>Service providers (e.g., payment processors, analytics tools).</li>
            <li>Legal authorities, if required by law.</li>
          </ul>
          <p className="text-gray-400 mt-4">
            We use <strong>encryption and secure storage</strong> when necessary to protect your data, but no system is 100% secure. Always use strong passwords and be mindful of sharing personal information.
          </p>
        </div>

        {/* User Rights & Choices */}
        <div>
          <h2 className="text-2xl font-semibold">5. Your Rights & Choices</h2>
          <p className="text-gray-400 mt-2">Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
            <li>Request access to your stored data.</li>
            <li>Request data deletion (may affect app functionality).</li>
            <li>Opt out of analytics tracking (managed via app settings).</li>
          </ul>
        </div>

        {/* Third-Party Links */}
        <div>
          <h2 className="text-2xl font-semibold">6. Third-Party Services</h2>
          <p className="text-gray-400 mt-2">
            JackpotAI may contain links to external websites or services, such as <strong>GoogleAds</strong> or <strong>Apple App Store</strong>.
            We are not responsible for their privacy policies.
          </p>
        </div>

        {/* Changes to This Policy */}
        <div>
          <h2 className="text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
          <p className="text-gray-400 mt-2">
            We may update this Privacy Policy as needed. We will notify users of major changes by email or app notifications.
            The latest version will always be available at{" "}
            <a href="https://jackpotai.app/privacy-policy" className="text-blue-400 underline">
              jackpotai.app/privacy-policy
            </a>.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold">8. Contact Us</h2>
          <p className="text-gray-400 mt-2">
            If you have any questions, contact us at{" "}
            <a href="mailto:support@jackpotai.app" className="text-blue-400 underline">
              support@jackpotai.app
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
