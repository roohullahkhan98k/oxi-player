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
        <iframe 
  src="http://api.mnomak.com/university/widget/27cb96de-40ea-44e3-a9ae-8c7b3ececa37" 
  width="380" 
  height="100vh" 
  frameBorder="0" 
  scrolling="no"
  style={{
    border: 'none',
    position: 'fixed',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 9999,
    width: '380px',
    height: '100vh'
  }}
  title="University Navigation Widget"
/>
      </body>
      
    </html>
  );
}
