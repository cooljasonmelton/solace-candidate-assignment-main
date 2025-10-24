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
      <body className={inter.className}>
        <header className="bg-card text-primary-bg border-b border-primary-border rounded-lg mx-16 mt-4 py-2 px-4 shadow-float">
          <div className="flex items-center">
            <h1>
              <a href="/" className="font-display text-2xl tracking-normal">
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
