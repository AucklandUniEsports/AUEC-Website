import Image from "next/image";
import StandardButton from "../../../_components/StandardButton";

export default function AboutSection() {
    return (
        <section className="flex flex-col px-7 md:px-0 pt-8 pb-12 gap-4 bg-linear-to-b from-transparent from-75% to-dark-purple/7">
            <div className="relative">
                <div className="grid grid-cols-1 md:brightness-75 md:grid-cols-[11fr_9fr] grid-rows-1 gap-4 h-[30vh] md:h-[45vh] lg:h-[65vh] w-full">
                    <div className="relative h-full">
                        <Image
                            src="/DSC00276.webp"
                            alt=""
                            fill
                            sizes="(min-width: 768px) 55vw, 100vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="hidden md:grid grid-rows-2 gap-4 h-full">
                        <div className="relative">
                            <Image
                                src="/DSC00032.webp"
                                alt=""
                                fill
                                sizes="45vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src="/DSC07430.webp"
                                alt=""
                                fill
                                sizes="45vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] to-transparent to-50%" />
            </div>
            <div className="relative pl-3 md:pl-5 lg:pl-16 flex flex-col gap-4 -mt-10 md:-mt-24">
                <h2 className="text-white font-syne text-[30px] md:text-[60px] lg:text-[100px] scale-y-75 font-normal md:font-medium not-italic leading-[0.9] md:leading-[0.8] tracking-[1.2px] uppercase">
                    MEET THE ESPORTS <br /> CLUB.
                </h2>
                <p className="text-white font-syne text-[15px] md:text-[22px] font-normal not-italic leading-none tracking-[0.2px] opacity-80 md:max-w-[60%] mb-5">
                    From fighting game locals to interclub tournaments, our team
                    runs a bunch of events for the community and puts a lot of
                    work into our broadcasts for the folks at home. Whether you
                    want to grind matches or get involved behind the scenes,
                    AUEC has a place for you.
                </p>
                <StandardButton
                    title="Find Out More."
                    color="lime"
                    link="/about"
                />
            </div>
        </section>
    );
}
