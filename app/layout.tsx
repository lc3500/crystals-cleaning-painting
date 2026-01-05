
import type { Metadata } from "next";
import "./theme.css";
import "./globals.css";
import { lilitaOne, antero } from "./fonts";
import PageTransition from "./page-transition";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoPath = `${basePath}/Logo.svg`;

export const metadata: Metadata = {
  title: "Crystal's Cleaning and Painting",
  description: "Professional cleaning, painting, and flooring services by Crystal McGuinn.",
  icons: {
    icon: logoPath,
    shortcut: logoPath,
  },
  openGraph: {
    title: "Crystal's Cleaning and Painting",
    description: "Professional cleaning, painting, and flooring services by Crystal McGuinn.",
    url: "https://crystals-cleaning-painting.vercel.app/",
    siteName: "Crystal's Cleaning and Painting",
    images: [
      {
        url: logoPath,
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
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
