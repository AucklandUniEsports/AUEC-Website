"use client";
import Image from "next/image";

interface EntryProps {
    onEnter: () => void;
}

export function Entry({ onEnter }: EntryProps) {
    return (
        <div
            className="merch-page relative h-screen w-full bg-cover bg-center cursor-pointer flex items-center justify-center"
            onClick={onEnter}
            onTouchStart={onEnter}
            style={{ backgroundImage: `url(/merch-01.webp)` }}
        >
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl md:text-7xl text-center">
                    2026 F/W
                    <Image
                        src="/auec_logo.svg"
                        alt="AUEC"
                        width={80}
                        height={80}
                        className="inline h-12 md:h-20"
                    />{" "}
                    <br /> COLLECTION
                </h1>
                <p className="text-white text-2xl md:text-5xl mt-4">
                    Tap to Enter.
                </p>
            </div>
        </div>
    );
}
