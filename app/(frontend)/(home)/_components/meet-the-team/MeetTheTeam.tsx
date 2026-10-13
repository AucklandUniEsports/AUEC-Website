import Link from "next/link";

export default function TeamSection() {
    return (
        <section className="relative flex h-[100svh] items-center justify-center overflow-hidden text-center md:h-[80svh]">
            <img
                className="absolute h-full w-full object-cover object-[center_45%]"
                src="DSC00858.webp"
                alt=""
            />

            <span
                aria-hidden="true"
                className=" absolute -left-[10vw] top-[40%] z-[2]
                -translate-y-1/2 -translate-x-[15vw] text-leftwhitespace-nowrap
                font-['Syne'] font-medium tracking-tight opacity-80
                text-transparent select-none text-[80vw]
                [-webkit-text-stroke:2px_rgba(156,114,255,0.8)]
                md:inset-x-0 md:top-1/2 md:-translate-x-[3vw] md:text-[35vw]
                md:[-webkit-text-stroke:2px_rgba(156,114,255,0.8)]"
            >
                <i>AUEC</i>
            </span>

            <div
                className="absolute inset-0 z-[1] opacity-20
                bg-[linear-gradient(180deg,#4700ED_0%,#000000_100%)]"
            />

            <div
                className="absolute top-[43%] right-16 left-8 z-[3]
                flex flex-col items-start text-left
                md:relative md:inset-auto md:max-w-[720px]
                md:items-center md:gap-5 md:px-0 md:text-center"
            >
                <h2 className="!font-['Syne'] text-[36px] font-medium leading-[0.9] text-white md:text-[72px] md:leading-[130%]">
                    <span className="block md:inline">MEET THE</span>{" "}
                    <span className="block md:inline">TEAM.</span>
                </h2>

                <p className="mt-5 max-w-[550px] !font-['Syne'] text-[13px] leading-[1.05] tracking-[0.9px] text-[#cfced2] md:mt-0 md:text-[20px] md:leading-normal md:tracking-[0.7px]">
                    The execs, game reps, broadcast crew and volunteers who keep
                    AUEC running. Built by students, for students. Meet the
                    people behind the matches.
                </p>

                <Link
                    href="/about"
                    className="mt-4 rounded-[5px] bg-[#e2ff00] px-6 py-3 font-['Switzer'] text-[16px] font-medium text-black md:mt-0 md:px-8 md:py-2 md:text-xl"
                >
                    Learn More.
                </Link>
            </div>
        </section>
    );
}
