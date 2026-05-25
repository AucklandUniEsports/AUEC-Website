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

interface EntryProps {
    onEnter: () => void;
}

export function Entry({ onEnter }: EntryProps) {

    const [currentLogo, setCurrentLogo] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLogo((prev) => (prev + 1) % logos.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="merch-page relative h-screen w-full bg-cover bg-center cursor-pointer flex items-center justify-center"
            onClick={onEnter}
            onTouchStart={onEnter}
            style={{ backgroundImage: `url(/merch-01.webp)` }}
        >
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl md:text-7xl text-center">
                    2026 F/W{" "}
                    <span className="relative inline-block h-25 md:h-20 w-30 md:w-32 translate-y-4">
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
                    </span>{" "}
                    <br /> COLLECTION
                </h1>
                <p className="text-white text-2xl md:text-5xl mt-4">
                    Tap to Enter.
                </p>
            </div>
        </div>
    );
}
