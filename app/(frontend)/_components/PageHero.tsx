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
            className="relative flex aspect-4096/1379 w-full flex-col justify-end gap-4 bg-cover bg-center pt-30 px-16 pb-16 tracking-wider max-[950px]:aspect-automax-[950px]:min-h-90 max-[950px]:px-8 max-[950px]:pt-32 max-[950px]:pb-10"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-col gap-4">
                <h1 className="origin-bottom scale-y-80 font-[Syne] text-[clamp(48px,5.5vw,120px)] leading-[0.9] font-medium tracking-wider text-white uppercase">
                    {title}
                </h1>
                {subtitle && (
                    <p className="max-w-[50vw] font-[Syne] text-[clamp(16px,1.3vw,26px)] leading-[1.2] font-normal tracking-normal text-white max-[950px]:max-w-full">
                        {subtitle}
                    </p>
                )}
            </div>
            {children}
        </section>
    );
}
