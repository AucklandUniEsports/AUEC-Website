import { ReactNode } from "react";

interface PageHeroProps {
    title: ReactNode;
    subtitle?: ReactNode;
    backgroundImage?: string;
    size?: "full" | "banner";
    children?: ReactNode;
}

export default function PageHero({
    title,
    subtitle,
    backgroundImage = "/background.webp",
    size = "banner",
    children,
}: PageHeroProps) {
    const sizeClasses =
        size === "full"
            ? "min-h-screen justify-between"
            : "min-h-[420px] justify-end max-[950px]:min-h-[320px]";

    return (
        <section
            className={`flex flex-col gap-6 bg-cover bg-center px-16 pt-40 pb-16 max-[950px]:px-8 max-[950px]:pb-12 ${sizeClasses}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-col gap-2">
                <h1 className="font-[Syne] text-[80px] leading-[80%] font-medium tracking-[1.2px] text-white uppercase max-[950px]:text-[64px]">
                    {title}
                </h1>
                {subtitle && (
                    <p className="font-[Switzer] text-2xl leading-none tracking-[-0.7px] text-white">
                        {subtitle}
                    </p>
                )}
            </div>
            {children}
        </section>
    );
}
