import Watermark from "./Watermark";

export default function HeroSection() {
    return (
        <section className="relative flex h-[calc(100svh-100px)] min-h-150 flex-col justify-end overflow-hidden bg-[url('/hero-background.webp')] bg-cover bg-center px-16 pt-40 pb-16 max-[950px]:px-8 max-[700px]:min-h-120 max-[700px]:px-6 max-[700px]:pb-10">
            <Watermark />
            <div className="relative z-1 flex flex-col gap-2">
                <h1 className="origin-bottom-left scale-y-75 font-[Syne] text-[clamp(3rem,6.25vw,11.25rem)] leading-[80%] font-medium text-white uppercase">
                    For The Love <br className="max-[700px]:hidden" /> of The
                    Game.
                </h1>
                <p className="font-[Switzer] text-2xl leading-[100%] pt-6 font-light text-white italic max-[950px]:text-xl max-[700px]:pt-3 max-[700px]:text-sm max-[700px]:leading-snug">
                    Auckland University Esports Club (AUEC) is New
                    Zealand&apos;s
                    <br className="max-[700px]:hidden" /> biggest student
                    e-sports organization, empowering players{" "}
                    <br className="max-[700px]:hidden" /> to compete and enjoy
                    gaming alongside their peers.
                </p>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform?usp=header"
                    target="_blank"
                    className="mt-2.5 w-fit cursor-pointer rounded-[5px] bg-[#e2ff00] px-4 py-3 font-[Switzer] text-[20px] font-medium text-black max-[700px]:mt-3 max-[700px]:py-2.5 max-[700px]:text-lg"
                >
                    Sign up to <em>AUEC.</em>
                </a>
            </div>
        </section>
    );
}
