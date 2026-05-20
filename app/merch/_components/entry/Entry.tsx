interface EntryProps {
    onEnter: () => void;
}

export function Entry({ onEnter }: EntryProps) {
    return (
        <div
            className="flex h-screen items-center justify-center cursor-pointer"
            onClick={onEnter}
        >
            <h1 className="text-4xl font-bold">Entry coming soon!</h1>
        </div>
    );
}
