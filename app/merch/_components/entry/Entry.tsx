"use client";
import EntryTitle from "./EntryTitle";
import EntrySubtitle from "./EntrySubtitle";

interface EntryProps {
    onEnter: () => void;
}

export function Entry({ onEnter }: EntryProps) {
    return (
        <div
            className="merch-page relative h-screen w-full bg-cover bg-center cursor-pointer flex items-center justify-center"
            onClick={onEnter}
            onTouchStart={onEnter}
            style={{ backgroundImage: `url(/merch-01.webp)` }}
        >
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                <EntryTitle />
                <EntrySubtitle />
            </div>
        </div>
    );
}
