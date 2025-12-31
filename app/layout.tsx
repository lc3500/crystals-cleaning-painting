import type { Metadata } from "next";
import "./theme.css";
import "./globals.css";
import { lilitaOne, antero } from "./fonts";

export const metadata: Metadata = {
  title: "Crystal's Cleaning and Painting",
  description: "Professional cleaning, painting, and flooring services by Crystal McGuinn.",
  openGraph: {
    title: "Crystal's Cleaning and Painting",
    description: "Professional cleaning, painting, and flooring services by Crystal McGuinn.",
    url: "https://crystals-cleaning-painting.vercel.app/",
    siteName: "Crystal's Cleaning and Painting",
    images: [
      {
        url: "/Logo.svg", // Replace with the relative path to your .svg icon
        width: 1200,
        height: 630,
        alt: "Crystal's Cleaning and Painting",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lilitaOne.variable} ${antero.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
