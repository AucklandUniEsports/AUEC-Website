interface CarouselDotProps {
    index: number;
    currentImage: number;
    onClick: (index: number) => void;
}

export default function CarouselDot({
    index,
    currentImage,
    onClick,
}: CarouselDotProps) {
    return (
        <button
            className={`w-8 h-1 rounded-full border-none cursor-pointer ${index === currentImage ? "bg-white opacity-100" : "bg-white opacity-50"}`}
            onClick={(e) => {
                e.stopPropagation();
                onClick(index);
            }}
        />
    );
}
