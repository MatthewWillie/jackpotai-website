// app/privacy-policy/page.tsx
import type { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Privacy Policy | JackpotAI - AI Lottery Number Generator',
  description: 'JackpotAI app privacy policy. Learn how we protect your data and privacy when using our AI lottery number generator.',
  keywords: 'JackpotAI privacy, lottery app privacy, AI number generator privacy policy',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-300">
                JackpotAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by JackpotAI. This Privacy Policy applies to our mobile application, JackpotAI, and its associated services (collectively, our "Service").
              </p>
              <p className="text-gray-300 mt-4">
                By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-300">
                We collect minimal personal information to provide and improve our Service:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                <li><strong>Device Information:</strong> We collect information about your mobile device, including device type, operating system, unique device identifiers, mobile network information, and the device's interaction with our Service.</li>
                <li><strong>Usage Information:</strong> We collect information related to how you use the Service, including actions you take within the app, preferences, and settings.</li>
                <li><strong>Purchase Information:</strong> If you make in-app purchases, we receive information about your purchase from the App Store, but we do not collect or store your payment method details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-300">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process your transactions</li>
                <li>Send you related information, including confirmations, technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Develop new products and services</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
              <p className="text-gray-300">
                We may share your personal information in the following situations:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                <li><strong>With Service Providers:</strong> We may share your information with third-party vendors and service providers that provide services on our behalf, such as hosting, data analytics, and customer service.</li>
                <li><strong>For Legal Purposes:</strong> We may disclose your information where required to do so by law or subpoena or if we reasonably believe that such action is necessary to comply with the law and the reasonable requests of law enforcement.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Your Privacy Rights</h2>
              <p className="text-gray-300">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request that we correct any personal information we hold about you</li>
                <li>The right to request that we delete any personal information we hold about you</li>
                <li>The right to opt-out of marketing communications</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise these rights, please contact us at privacy@jackpotai.app.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Children's Privacy</h2>
              <p className="text-gray-300">
                Our Service is not directed to children under 13 (or other age as required by local law), and we do not knowingly collect personal information from children. If you learn that a child has provided us with personal information in violation of this Privacy Policy, you can alert us at privacy@jackpotai.app.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Changes to this Privacy Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at privacy@jackpotai.app.
              </p>
            </section>

            <div className="pt-6 text-gray-400 text-sm">
              Last Updated: March 20, 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}