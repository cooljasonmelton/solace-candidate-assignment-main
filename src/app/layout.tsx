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
        <header className="bg-accent border-b border-border">
          <div className="container-page h-16 flex items-center">
            <a
              href="/"
              className="font-display text-lg font-semibold tracking-tight"
            >
              Solace Advocates
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
