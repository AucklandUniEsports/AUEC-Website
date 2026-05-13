export default function SearchIcon() {
    return (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#aaaaaa] pointer-events-none">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                    cx="6.5"
                    cy="6.5"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <path
                    d="M10.5 10.5L14 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        </span>
    );
}
