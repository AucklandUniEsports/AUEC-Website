import Image from "next/image";

interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    return (
        <div className="hidden md:block md:w-1/2 overflow-y-auto">
            {images.map((src, index) => (
                <div key={index} className="relative w-full h-screen">
                    <Image
                        src={src}
                        alt="merch"
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    );
}
