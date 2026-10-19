import StandardButton from "../../_components/StandardButton";

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
                    <StandardButton
                        key={option}
                        title={option}
                        color={isSelected ? "lime" : "dark"}
                        size={size}
                        onClick={() => onChange(option)}
                        pressed={isSelected}
                    />
                );
            })}
        </div>
    );
}
