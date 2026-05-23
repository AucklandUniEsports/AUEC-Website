"use client";
import Image from "next/image";
import CarouselDot from "./CarouselDot";

interface ImageCarouselProps {
    images: string[];
    currentImage: number;
    onImageClick: () => void;
    onDotClick: (index: number) => void;
}

export default function ImageCarousel({
    images,
    currentImage,
    onImageClick,
    onDotClick,
}: ImageCarouselProps) {
    return (
        <div className="relative w-full h-[75vh] overflow-hidden md:hidden">
            {images.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt="merch"
                    fill
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
