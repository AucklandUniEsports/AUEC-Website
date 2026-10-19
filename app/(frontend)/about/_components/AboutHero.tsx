import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative flex min-h-[65vh] items-end overflow-hidden bg-[#0e0e1c] px-16 pt-30 pb-16 max-[950px]:min-h-[78vh] max-[950px]:px-8 max-[950px]:pb-20">
            <Image
                src="/auec-about-landing.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="pointer-events-none object-cover object-center select-none"
            />
            <div className="relative z-1 flex max-w-175 flex-col gap-4">
                <h1 className="animate-fade-up motion-reduce:animate-none font-syne text-[clamp(3rem,16vw,5rem)] leading-[0.8] font-bold scale-y-80 tracking-[0.075rem] text-white uppercase">
                    ABOUT AUEC.
                </h1>
                <p className="animate-fade-up [animation-delay:0.15s] motion-reduce:animate-none max-w-150 text-[clamp(1rem,1.4vw,1.375rem)] leading-[1.4] tracking-[-0.01875rem] text-white">
                    The Auckland University Esports Club is a student
                    association operated by students studying at the University
                    of Auckland, aiming to cultivate a thriving community of
                    people with a passion for gaming and competition.
                </p>
            </div>
        </section>
    );
}
