import Watermark from "./Watermark";

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[url('/hero-background.webp')] bg-cover bg-center px-16 pt-40 pb-16 max-[950px]:px-8 max-[700px]:justify-start">
            <Watermark />
            <div className="relative z-1 mt-[60px] flex flex-col gap-2 max-[700px]:mt-[30px]">
                <h1 className="font-[Syne] text-[100px] leading-[80%] font-medium tracking-[1.2px] text-white uppercase max-[950px]:text-[64px] max-[700px]:text-[45px]">
                    For The Love <br className="max-[700px]:hidden" /> of The
                    Game.
                </h1>
                <p className="font-[Switzer] text-[22px] leading-[100%] font-light tracking-[-0.7px] text-white italic max-[700px]:text-[14px]">
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
                    className="button-standard button-lime mt-2.5 max-[700px]:-mt-2.5 max-[700px]:px-[18px] max-[700px]:py-3 max-[700px]:text-[18px]"
                >
                    Sign up to <em>AUEC.</em>
                </a>
            </div>
        </section>
    );
}
