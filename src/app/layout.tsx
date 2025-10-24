import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solace Candidate Assignment",
  description: "Show us what you got",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-bg"}>
        <header className="bg-card text-primary-bg border-b border-primary-border rounded-lg max-w-6xl mx-auto mt-4 py-2 px-4 shadow-float">
          <div className="flex items-center">
            <h1>
              <a href="/" className="font-display text-4xl tracking-normal">
                Solace
              </a>
            </h1>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
