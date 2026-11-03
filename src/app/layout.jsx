import { Geist, Geist_Mono } from "next/font/google";
import HeaderComp from "@/Components/Layout/HeaderComp";
import FooterComp from "@/Components/Layout/FooterComp";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Justdial Clone - Local Search & Business Directory",
  description: "Search for local businesses, services, phone numbers, addresses, and ratings across top cities.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-800">
        <HeaderComp />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <FooterComp />
      </body>
    </html>
  );
}
