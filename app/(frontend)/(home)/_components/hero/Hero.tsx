import StandardButton from "../../../_components/StandardButton";
import Watermark from "./Watermark";

export default function HeroSection() {
    return (
        <section className="relative flex h-[calc(100svh-100px)] min-h-150 flex-col justify-end overflow-hidden bg-[url('/hero-background.webp')] bg-cover bg-center px-16 pt-40 pb-16 max-[950px]:px-8 max-[700px]:min-h-120 max-[700px]:px-6 max-[700px]:pb-10">
            <Watermark />
            <div className="relative z-1 flex flex-col gap-2">
                <h1 className="animate-fade-up motion-reduce:animate-none origin-bottom-left scale-y-75 font-[Syne] text-[clamp(3rem,6.25vw,11.25rem)] leading-[80%] font-medium text-white uppercase">
                    For The Love <br className="max-[700px]:hidden" /> of The
                    Game.
                </h1>
                <p className="animate-fade-up [animation-delay:0.15s] motion-reduce:animate-none font-[Switzer] text-2xl leading-[100%] pt-6 font-light text-white italic max-[950px]:text-xl max-[700px]:pt-3 max-[700px]:text-sm max-[700px]:leading-snug">
                    Auckland University Esports Club (AUEC) is New
                    Zealand&apos;s
                    <br className="max-[700px]:hidden" /> biggest student
                    e-sports organization, empowering players{" "}
                    <br className="max-[700px]:hidden" /> to compete and enjoy
                    gaming alongside their peers.
                </p>
                <StandardButton
                    title={
                        <>
                            Sign up to <em>AUEC.</em>
                        </>
                    }
                    color="lime"
                    link="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform?usp=header"
                    external
                    className="mt-2.5 ml-1 max-[700px]:mt-3 animate-fade-up [animation-delay:0.3s] motion-reduce:animate-none"
                />
            </div>
        </section>
    );
}
