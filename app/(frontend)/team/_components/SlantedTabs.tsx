export function SlantedTabs<T extends string | number>({
    options,
    value,
    onChange,
    labelledBy,
    ariaLabel,
    align = "center",
    size = "default",
}: {
    options: T[];
    value: T;
    onChange: (value: T) => void;
    labelledBy?: string;
    ariaLabel?: string;
    align?: "center" | "start";
    size?: "default" | "small";
}) {
    return (
        <div
            role="group"
            aria-labelledby={labelledBy}
            aria-label={ariaLabel}
            className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}
        >
            {options.map((option) => {
                const isSelected = option === value;
                return (
                    <button
                        key={option}
                        type="button"
                        onClick={() => onChange(option)}
                        aria-pressed={isSelected}
                        className={`-skew-x-12 ${size === "small" ? "px-5 md:px-7" : "px-8 md:px-12"} py-1 md:py-2 cursor-pointer transition-colors duration-300 ${
                            isSelected
                                ? "bg-neon-green text-black"
                                : "bg-[#272727] text-white hover:bg-[#333333]"
                        }`}
                    >
                        <span
                            className={`block skew-x-12 font-syne uppercase ${size === "small" ? "text-sm md:text-base tracking-[0.1em]" : "text-base md:text-lg tracking-[0.15em]"}`}
                        >
                            {option}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
