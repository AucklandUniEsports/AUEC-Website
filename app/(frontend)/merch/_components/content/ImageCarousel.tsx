"use client";
import Image from "next/image";
import { useRef } from "react";
import CarouselDot from "./CarouselDot";

interface ImageCarouselProps {
    images: string[];
    currentImage: number;
    onImageClick: () => void;
    onDotClick: (index: number) => void;
    onSwipe: (direction: "left" | "right") => void;
}

export default function ImageCarousel({
    images,
    currentImage,
    onImageClick,
    onDotClick,
    onSwipe,
}: ImageCarouselProps) {
    const touchStartX = useRef<number | null>(null);

    return (
        <div
            className="relative w-full h-[75vh] overflow-hidden lg:hidden"
            onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const diff = touchStartX.current - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 40) {
                    onSwipe(diff > 0 ? "left" : "right");
                }
                touchStartX.current = null;
            }}
        >
            {images.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt="merch"
                    fill
                    sizes="100vw"
                    className={`absolute inset-0 w-full h-full object-cover cursor-pointer transition-opacity duration-500 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
                    onClick={onImageClick}
                />
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <CarouselDot
                        key={index}
                        index={index}
                        currentImage={currentImage}
                        onClick={onDotClick}
                    />
                ))}
            </div>
        </div>
    );
}
