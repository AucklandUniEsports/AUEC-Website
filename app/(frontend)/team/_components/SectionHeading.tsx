import type { ReactNode } from "react";

export function SectionHeading({
    label,
    title,
    count,
    children,
}: {
    label: string;
    title: string;
    count?: string;
    children?: ReactNode;
}) {
    return (
        <div className="flex items-end justify-between gap-6 border-b border-[#888888] pb-4">
            <div className="font-syne uppercase">
                <p className="text-neon-green text-sm md:text-lg tracking-[0.2em]">
                    {label}
                </p>
                <h2 className="text-white text-[40px] md:text-[72px] font-medium leading-[0.8] tracking-[1.2px] scale-y-75 origin-bottom-left">
                    {title}
                </h2>
            </div>
            {count && (
                <p className="hidden md:block font-syne text-white/60 text-lg uppercase tracking-[0.2em] whitespace-nowrap">
                    {count}
                </p>
            )}
            {children}
        </div>
    );
}
