import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PromptFlow - AI Prompt Tips & Examples",
  description:
    "A curated collection of AI prompt tips, examples, and best practices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <header className="border-b border-gray-700/50">
          <nav className="container py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                PromptFlow
              </h1>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tips
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Examples
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="border-t border-gray-700/50 mt-auto">
          <div className="container py-6">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} PromptFlow. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
