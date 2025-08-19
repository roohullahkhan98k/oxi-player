import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Splash from "../components/Splash";
import ChatWidget from "../components/ChatWidget";
import SiteBlock from "../components/SiteBlock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oxi Player",
  description: "Oxi Player - Powerful streaming and playlist management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_SITE_BLOCKED === 'true' ? (
          <SiteBlock />
        ) : (
          <>
            <Splash />
            <Header />
            {children}
            <ChatWidget />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
