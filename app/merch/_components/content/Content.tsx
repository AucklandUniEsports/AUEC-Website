"use client";
import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import ImageGallery from "./ImageGallery";
import MerchInfo from "./MerchInfo";

const images = [
    "/merch-01.webp",
    "/merch-02.webp",
    "/merch-03.webp",
    "/merch-04.webp",
    "/merch-05.webp",
    "/merch-06.webp",
    "/merch-07.webp",
    "/merch-08.webp",
];

const ORDER_LINK =
    "https://docs.google.com/forms/d/16dwVLuVc16wdAlokWbxWuvpSWe2PMIcqYs_aHWAg6dA/";

export function Content() {
    const [currentImage, setCurrentImage] = useState(0);
    const [autoPlay, setAutoPlay] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [autoPlay]);


    return (
        <div className="merch-page flex flex-col lg:flex-row">
            <ImageCarousel
                images={images}
                currentImage={currentImage}
                onImageClick={() => {
                    setCurrentImage((prev) => (prev + 1) % images.length);
                    setAutoPlay((prev) => prev + 1);
                }}
                onDotClick={(index) => {
                    setCurrentImage(index);
                    setAutoPlay((prev) => prev + 1);
                }}
                onSwipe={(direction) => {
                    setCurrentImage((prev) =>
                        direction === "left"
                            ? (prev + 1) % images.length
                            : (prev - 1 + images.length) % images.length
                    );
                    setAutoPlay((prev) => prev + 1);
                }}
            />
            <ImageGallery images={images} />
            <MerchInfo orderLink={ORDER_LINK} />
        </div>
    );
}
