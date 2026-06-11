import Image from "next/image";

interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    return (
        <div className="hidden lg:block lg:w-1/2 overflow-y-auto">
            {images.map((src, index) => (
                <div key={index} className="relative w-full h-screen">
                    <Image
                        src={src}
                        alt="merch"
                        fill
                        sizes="50vw"
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    );
}
