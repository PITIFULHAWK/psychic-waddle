import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Phynovate",
    template: "%s | Phynovate",
  },
  description: "Phynovate - Your description here",
  keywords: ["Phynovate", "Your", "Keywords", "Here"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name/Company",
  metadataBase: new URL("https://phynovate.co.in"),
  openGraph: {
    title: "Phynovate",
    description: "Phynovate - Your description here",
    url: "https://phynovate.co.in",
    siteName: "Phynovate",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
