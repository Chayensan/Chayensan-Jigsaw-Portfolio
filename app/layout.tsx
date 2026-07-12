import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
