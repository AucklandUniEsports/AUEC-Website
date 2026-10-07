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
            : "h-[538px] justify-end max-[950px]:h-[400px]";

    return (
        <section
            className={`flex flex-col gap-6 bg-cover bg-center px-16 pt-40 pb-14 max-[950px]:px-8 max-[950px]:pb-10 ${sizeClasses}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-col gap-6 max-[950px]:gap-4">
                <h1 className="font-[Syne] scale-y-80 tracking-wider text-[80px] leading-[80%] font-medium text-white uppercase max-[950px]:text-[48px]">
                    {title}
                </h1>
                {subtitle && (
                    <p className="max-w-187.5 font-[Syne] text-lg leading-[1.15] tracking-wider text-white">
                        {subtitle}
                    </p>
                )}
            </div>
            {children}
        </section>
    );
}
