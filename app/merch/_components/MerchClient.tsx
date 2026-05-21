"use client";
import { useState, useEffect } from "react";

const images = [
    "/merch-01.webp",
    "/merch-02.webp",
    "/merch-03.webp",
    "/merch-04.webp",
];

export function MerchClient() {
    const [entered, setEntered] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [autoPlay, setAutoPlay] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [autoPlay]);

    if (!entered) {
        return (
            <div
                className="merch-page relative h-screen w-full bg-cover bg-center cursor-pointer flex items-center justify-center"
                onClick={() => setEntered(true)}
                style={{ backgroundImage: `url(/merch-01.webp)` }}
            >
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                    <h1 className="text-white text-8xl text-center">
                        2026 F/W{" "}
                        <img
                            src="/auec_logo.svg"
                            alt="AUEC"
                            className="inline h-24"
                        />{" "}
                        <br /> AUEC COLLECTION
                    </h1>
                    <p className="text-white text-5xl mt-4">Tap to Enter.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="merch-page flex h-screen">
            <div className="relative w-1/2 h-full overflow-hidden">
                {images.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt="merch"
                        className={`absolute inset-0 w-full h-full object-cover cursor-pointer transition-opacity duration-500 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
                        onClick={() => {
                            setCurrentImage(
                                (prev) => (prev + 1) % images.length,
                            );
                            setAutoPlay((prev) => prev + 1);
                        }}
                    />
                ))}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer ${index === currentImage ? "bg-white opacity-100" : "bg-white opacity-50"}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImage(index);
                                setAutoPlay((prev) => prev + 1);
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="w-1/2 bg-white flex flex-col items-center justify-center p-16 text-center">
                <p className="text-sm text-gray-500 mb-4">
                    2026 Fall/Winter Drop
                </p>
                <h2 className="text-5xl font-bold mb-4">"The Collection"</h2>
                <p className="text-base mb-6">NZ$ 60.00</p>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                    A collection of one hoodie is still a collection.
                    <br />
                    All units made to order.
                    <br />
                    Ready to collect in semester two.
                </p>
                <a
                    href="https://docs.google.com/forms/d/16dwVLuVc16wdAlokWbxWuvpSWe2PMIcqYs_aHWAg6dA/"
                    target="_blank"
                    className="bg-black text-white px-12 py-4
                text-sm tracking-widest"
                >
                    ORDER NOW
                </a>
            </div>
        </div>
    );
}