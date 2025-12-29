import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts/poppins";

export const metadata: Metadata = {
  title: "DuoCredit | Fast & Simple Online Loans",
  description:
    "Get your first loan free. Quick application, instant approval, money in your account within minutes. Trusted by thousands.",
  keywords: [
    "online loans",
    "quick loans",
    "instant credit",
    "personal loans",
    "fast money",
  ],
  authors: [{ name: "DuoCredit" }],
  openGraph: {
    title: "DuoCredit | Fast & Simple Online Loans",
    description:
      "Get your first loan free. Quick application, instant approval, money in your account within minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
