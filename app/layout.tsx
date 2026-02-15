import type { Metadata } from "next";
import Switzer from "next/font/local";
import Syne from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ReactLenis } from 'lenis/react'

const switzer = Switzer({
  src:[
        {
      path: '../public/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/Switzer-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
  ]
});

const syne = Syne({
  src:[
        {
      path: '../public/Syne-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
  ]
});


export const metadata: Metadata = {
  title: "AUEC",
  description: "Welcome to Auckland University Esports Club!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root />
      <body className={`${switzer} ${syne}`}>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
