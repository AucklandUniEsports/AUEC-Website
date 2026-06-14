"use client";
import EntryTitle from "./EntryTitle";
import EntrySubtitle from "./EntrySubtitle";
import Image from "next/image";

interface EntryProps {
    onEnter: () => void;
}

export function Entry({ onEnter }: EntryProps) {
    return (
        <div
            className="merch-page relative h-screen w-full cursor-pointer"
            onClick={onEnter}
        >
            <Image
                src="/countdown.webp"
                alt="Entry background"
                fill
                priority
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="/countdown_blur.webp"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                <EntryTitle />
                <EntrySubtitle />
            </div>
        </div>
    );
}
