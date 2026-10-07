import Image from "next/image";

export function TeamHero() {
    return (
        <section className="relative pb-6 sm:pb-12 md:pb-20">
            <div className="relative aspect-[3/5] max-h-[90svh] w-full sm:aspect-[4/5] md:aspect-[16/9] lg:aspect-[4096/1379] lg:max-h-none">
                <Image
                    src="/TeamPage/Banner.webp"
                    alt="The AUEC committee"
                    fill
                    priority
                    sizes="(max-width: 640px) 500vw, (max-width: 1024px) 200vw, 100vw"
                    className="object-cover object-[18%_center] lg:object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] to-transparent to-40%" />

                <div className="absolute bottom-6 md:-bottom-10 left-0 right-0 px-7 md:px-16 tracking-wider">
                    <h1 className="font-syne text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap leading-[0.95] font-bold uppercase scale-y-80 origin-bottom-left">
                        Meet the Team.
                    </h1>
                </div>
            </div>
        </section>
    );
}
