import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cornortech | Cornortech Microfinance Pvt. Ltd.",
  description: "Banking with Happiness. Empowering communities through microfinance and financial literacy.",
  keywords: ["Cornortech", "Microfinance", "Nepal Banking", "Financial Literacy", "Cornortech Microfinance"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
