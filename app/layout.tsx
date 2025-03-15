// app/layout.tsx
import "./globals.css"; // Tailwind's global styles

export const metadata = {
  // Site-wide metadata (can be overridden in page.tsx)
  title: "JackpotAI",
  description: "AI-Powered Lottery Number Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white font-sans">
        {children}
      </body>
    </html>
  );
}
