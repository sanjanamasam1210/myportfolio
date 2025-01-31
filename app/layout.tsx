import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/app/components/navbar";
import Cursor from "./cursor";


export const metadata: Metadata = {
  title: "Sanjana Masam",
  description: "Sanjana Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Cursor/>
      <body className="font-gambetta-medium bg-[#f6ede4]"
      >
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}
