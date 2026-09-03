import Link from "next/link";

export default function TeamSection() {
    return (
        <section className="relative flex h-[80svh] items-center justify-center text-center overflow-hidden">
            <img
                className="absolute h-full w-full object-cover"
                src="DSC00858.webp"
                alt=""
            />
            <span
                aria-hidden="true"
                className="absolute inset-x-0 top-1/2 z-[2]
                -translate-y-1/2 -translate-x-[3vw] text-center
                font-['Syne'] font-medium tracking-tight whitespace-nowrap
                text-transparent [-webkit-text-stroke:2px_rgba(156,114,255,0.8)]
                
                text-[35vw] select-none"
            >
                <i>AUEC</i>
            </span>
            <div
                className="absolute inset-0 z-[1] opacity-20
                bg-[linear-gradient(180deg,#4700ED_0%,#000000_100%)]"
            />
            <div className="relative z-[2] flex max-w-[720px] flex-col items-start gap-5 px-5 text-left md:items-center md:px-0 md:text-center">
                <h2 className="mt-10 md:mt-0 font-['Syne'] text-[56px] md:text-[72px] font-medium leading-[130%] md:scale-x-[1.3] text-white">
                    MEET THE TEAM.
                </h2>

                <p className="mt-25 md:mt-0 max-w-[560px] font-['Syne'] text-[18px] md:text-[24px] tracking-[-0.3px] md:tracking-[-0.7px]md:scale-x-[1.2] text-[#cfced2]">
                    The execs, game reps, broadcast crew and volunteers who keep
                    AUEC running. Built by students, for students. Meet the
                    people behind the matches.
                </p>
                <Link
                    href="/about"
                    className="rounded-[5px] bg-[#e2ff00] px-8 py-2 font-['Switzer'] text-xl font-medium text-black"
                >
                    Learn More.
                </Link>
            </div>
        </section>
    );
}
