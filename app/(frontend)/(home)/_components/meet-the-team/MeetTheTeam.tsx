import Link from "next/link";

export default function TeamSection() {
    return (
        <section className="relative flex h-[100svh] items-center justify-center text-center">
            <img
                className="absolute h-full object-cover"
                src="DSC00858.webp"
                alt=""
            />
            <div className="relative flex max-w-[720px] flex-col items-center gap-5">
                <h2 className="font-['Syne'] text-[72px] font-medium leading-[80%] text-white ">
                    MEET THE TEAM.
                </h2>

                <p className="max-w-[560px] font-['Syne'] text-[24px] leading-none tracking-[-0.7px] text-white">
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
