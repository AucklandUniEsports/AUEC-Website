import Image from "next/image";

export type Photo = {
    src: string;
    width: number;
    height: number;
    alt?: string;
};

type PhotoSliderProps = {
    photos: Photo[];
    className?: string;
};

// Short lists are repeated so one set is always wider than the screen
const MIN_PHOTOS_PER_SET = 8;

export default function PhotoSlider({
    photos,
    className = "",
}: PhotoSliderProps) {
    const repeats = Math.ceil(MIN_PHOTOS_PER_SET / photos.length);
    const set = Array.from({ length: repeats }, () => photos).flat();

    return (
        <div className="overflow-hidden">
            <div
                className={`flex w-max animate-marquee motion-reduce:animate-none ${className}`}
            >
                {[...set, ...set].map((photo, i) => (
                    <Image
                        key={i}
                        src={photo.src}
                        alt={i < photos.length ? (photo.alt ?? "") : ""}
                        aria-hidden={i >= photos.length}
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
