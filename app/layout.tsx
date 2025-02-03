import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/app/components/navbar";
import { Manrope,Space_Mono } from "next/font/google";
import ScrollProgressButton from "./components/ScrollProgressButton";

import Cursor from "./cursor";
import Footer from "./components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400","500","600", "700", "800"], 
  variable: "--font-manrope",
});

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: ["400","700"], 
  variable: "--font-spacemono",
});

export const metadata: Metadata = {
  title: "Sanjana Masam",
  description: "Sanjana Portfolio",
  icons: {
    icon: '/logo2.png'}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${manrope.variable} ${spacemono.variable}`}>
      <Cursor/>
      <body className="font-manrope"
      >
        
        <Navbar />
        {children}
        <ScrollProgressButton />
        <Footer />
      </body>
    </html>
  );
}
