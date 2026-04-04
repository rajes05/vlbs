import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VLBS | Vijaya Laghubitta Bittiya Sanstha Ltd.",
  description: "Banking with Happiness. Empowering communities through microfinance and financial literacy.",
  keywords: ["VLBS", "Microfinance", "Nepal Banking", "Financial Literacy", "Vijaya Laghubitta"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
