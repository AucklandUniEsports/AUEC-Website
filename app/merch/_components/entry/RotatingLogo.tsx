"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const logos = [
    "/logo-01.webp",
    "/logo-02.webp",
    "/logo-03.webp",
    "/logo-04.webp",
    "/logo-05.webp",
    "/logo-06.webp",
    "/logo-07.webp",
    "/logo-08.webp",
    "/logo-09.webp",
    "/logo-10.webp",
];

export default function RotatingLogo() {
    const [currentLogo, setCurrentLogo] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLogo((prev) => (prev + 1) % logos.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="absolute -top-2 -right-16 w-40 md:w-56 h-12 md:h-24">
            {logos.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt="AUEC"
                    fill
                    unoptimized
                    className={`object-contain transition-opacity duration-500 ${index === currentLogo ? "opacity-100" : "opacity-0"}`}
                />
            ))}
        </span>
    );
}