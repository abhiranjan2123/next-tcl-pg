import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar';

import "./globals.css";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import WhatsAppIcon from "./components/WhatsAppSticky";
import BookVisitFixedIcon from "./components/BookVisitFixedIcon";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "The Cozy Luxe - Paying Guest Accommodation for Womens",
  description: "Luxurious Paying Guest Accommodation for Womens at Bengaluru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <NavBar/>
        {children}
        <WhatsAppIcon />
        <BookVisitFixedIcon />

      </body>
    </html>
  );
}
