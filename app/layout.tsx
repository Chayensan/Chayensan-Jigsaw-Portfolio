import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DK | Still Assembling",
  description:
    "Desi designs conditions for people to find each other across events, community, Web3, and growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
