import type { Metadata } from "next";
import "./theme.css";
import "./globals.css";
import Header from "./header";
import { ScrollArea } from "@/components/ui/scroll-area"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
        url: "https://crystals-cleaning-painting.vercel.app/og-image.jpg",
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
    <html lang="en">
      <body
      
      >
       
        
          {children}
    
      </body>
    </html>
  );
}
