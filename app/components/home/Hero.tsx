import Image from "next/image";
import StandardButton from "../StandardButton";

export default function HeroSection() {
    return (
        <section className="merch-page relative w-full overflow-hidden h-[75dvh]">
            <Image
                src="/banner.webp"
                alt="2026 Fall/Winter Drop — The Collection"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />

            <div className="absolute inset-0 flex items-center">
                <div className="px-6 text-white sm:px-10 md:px-14 lg:px-20">
                    <p className="text-base tracking-wide sm:text-lg md:text-xl">
                        2026 Fall/Winter Drop
                    </p>

                    <h1 className="relative -mt-1 text-4xl leading-none sm:text-7xl md:text-8xl lg:text-9xl">
                        <span className="absolute right-full top-0">
                            &ldquo;
                        </span>
                        The Collection&rdquo;
                    </h1>

                    <p className="-mt-1 text-base text-white/90 sm:text-xl md:text-2xl">
                        A collection of one hoodie is still a collection.
                    </p>

                    <div className="mt-5">
                        <StandardButton
                            title="Explore Now"
                            color="grey"
                            link="https://docs.google.com/forms/d/16dwVLuVc16wdAlokWbxWuvpSWe2PMIcqYs_aHWAg6dA/edit"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
