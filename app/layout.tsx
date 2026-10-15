import type { Metadata } from "next";
import Switzer from "next/font/local";
import Syne from "next/font/local";
import "./(frontend)/globals.css";
import Navbar from "./(frontend)/_components/navbar/Navbar";
import Footer from "./(frontend)/_components/footer/Footer";
import { ReactLenis } from "lenis/react";
import LenisScrollReset from "./(frontend)/_components/LenisScrollReset";

const switzer = Switzer({
    variable: "--font-switzer-local",
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
    variable: "--font-syne-local",
    src: [
        {
            path: "../public/Syne-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/Syne-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/Syne-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/Syne-Bold.woff2",
            weight: "700",
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
                <LenisScrollReset />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
