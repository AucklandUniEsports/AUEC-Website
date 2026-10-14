import Image from "next/image";

export type Photo = {
    src: string;
    width: number;
    height: number;
};

type PhotoSliderProps = {
    photos: Photo[];
    className?: string;
};

export default function PhotoSlider({
    photos,
    className = "",
}: PhotoSliderProps) {
    return (
        <div className="overflow-hidden">
            <div
                className={`flex w-max animate-marquee motion-reduce:animate-none ${className}`}
            >
                {[...photos, ...photos].map((photo, i) => (
                    <Image
                        key={i}
                        src={photo.src}
                        alt=""
                        width={photo.width}
                        height={photo.height}
                        sizes="(min-width: 768px) 50vw, 75vw"
                        className="mr-4 h-full w-auto object-cover"
                    />
                ))}
            </div>
        </div>
    );
}
