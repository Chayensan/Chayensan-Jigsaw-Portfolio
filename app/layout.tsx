import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Hero accent serif — the one deliberate exception to the site's all-sans
// system (see globals.css §font system comment). Self-hosted via next/font,
// scoped to .hero-identity-accent only.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif-accent",
});

export const metadata: Metadata = {
  title: "Desi Kamdrawati",
  description:
    "Desi Kamdrawati helps early-stage teams turn attention into users, members, and partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body>
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
