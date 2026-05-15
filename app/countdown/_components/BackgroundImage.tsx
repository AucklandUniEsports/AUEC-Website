import Image from "next/image";

export function BackgroundImage() {
    return (
        <>
            <Image
                src="/countdown.webp"
                alt="Countdown"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </>
    );
}
