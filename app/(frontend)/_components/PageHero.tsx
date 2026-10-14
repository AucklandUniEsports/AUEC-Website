import { ReactNode } from "react";

interface PageHeroProps {
    title: ReactNode;
    subtitle?: ReactNode;
    backgroundImage?: string;
    children?: ReactNode;
}

export default function PageHero({
    title,
    subtitle,
    backgroundImage = "/background.webp",
    children,
}: PageHeroProps) {
    return (
        <section
            className="relative flex aspect-4096/1379 w-full flex-col justify-end gap-4 bg-cover bg-center pt-30 px-16 pb-16 tracking-wider max-[950px]:aspect-auto max-[950px]:min-h-90 max-[950px]:px-8 max-[950px]:pt-32 max-[950px]:pb-10"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-col gap-4">
                <h1 className="animate-fade-up motion-reduce:animate-none origin-bottom scale-y-80 font-syne text-[clamp(24px,calc((100vw-64px)/9.6),48px)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] font-bold tracking-normal text-white uppercase">
                    {title}
                </h1>
                {subtitle && (
                    <p className="animate-fade-up [animation-delay:0.15s] motion-reduce:animate-none max-w-[50vw] font-syne text-[clamp(16px,1.3vw,26px)] leading-[1.2] font-normal tracking-normal text-white max-[950px]:max-w-full">
                        {subtitle}
                    </p>
                )}
            </div>
            {children}
        </section>
    );
}
