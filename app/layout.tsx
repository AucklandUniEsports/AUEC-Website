import type { Metadata } from "next";
import Switzer from "next/font/local";
import Syne from "next/font/local";
import "./(frontend)/globals.css";
import Navbar from "./(frontend)/_components/navbar/Navbar";
import Footer from "./(frontend)/_components/footer/Footer";
import { ReactLenis } from "lenis/react";

const switzer = Switzer({
    variable: "--font-switzer",
    src: [
        {
            path: "../public/Switzer-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "../public/Switzer-Extralight.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "../public/Switzer-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/Switzer-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/Switzer-Medium.woff2",
            weight: "500",
            style: "normal",
        },
    ],
});

const syne = Syne({
    variable: "--font-syne",
    src: [
        {
            path: "../public/Syne-Medium.woff2",
            weight: "500",
            style: "normal",
        },
    ],
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
            <body className={`${switzer.variable} ${syne.variable}`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
