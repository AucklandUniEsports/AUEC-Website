import Image from "next/image";
import StandardButton from "../../../_components/StandardButton";

export default function TeamSection() {
    return (
        <section className="relative flex h-[80svh] overflow-hidden pt-[43svh] pr-16 pl-8 md:items-center md:justify-center md:p-0">
            <Image
                src="/DSC00858.webp"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-[center_45%]"
            />

            <div className="absolute inset-0 bg-linear-to-b from-dark-purple to-black opacity-20" />

            <Image
                src="/auec-outline.svg"
                alt=""
                width={837}
                height={234}
                className="absolute top-1/2 left-[-20vw] h-auto w-[260vw] max-w-none -translate-y-1/2 select-none opacity-30 md:left-1/2 md:w-[95%] md:-translate-x-1/2"
            />

            <div className="relative flex flex-col items-start gap-4 md:max-w-180 md:items-center md:gap-5 md:text-center">
                <h2 className="font-syne text-[36px] font-medium leading-[0.9] text-white md:text-[72px] md:leading-[1.3]">
                    MEET THE TEAM.
                </h2>

                <p className="max-w-137.5 font-syne text-[13px] leading-[1.05] tracking-[0.9px] text-[#cfced2] md:text-[20px] md:leading-normal md:tracking-[0.7px]">
                    The execs, game reps, broadcast crew and volunteers who keep
                    AUEC running. Built by students, for students. Meet the
                    people behind the matches.
                </p>

                <StandardButton
                    title="Learn More."
                    color="lime"
                    link="/about"
                />
            </div>
        </section>
    );
}
