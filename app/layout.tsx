import type { Metadata } from "next";
import Switzer from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

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
      <body className={`${switzer}`}>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
