import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Theta Tau @ San Jose State University",
  description: "Created by Theta Tau Actives!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en overscroll-none overflow-x-hidden h-full">
      <body
        className={`${geistSans.variable} font-sans antialiased overflow-x-hidden h-full`}
      >
        <Navbar />
        <div className="pt-[7rem]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
