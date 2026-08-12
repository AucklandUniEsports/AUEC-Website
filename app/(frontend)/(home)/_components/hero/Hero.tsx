import StandardButton from "../../../_components/StandardButton";

export default function HeroSection() {
    return (
        <section className="home-a atf-section">
            <span className="home-a-watermark" aria-hidden="true">
                AUEC
            </span>
            <div className="home-a-content">
                <h1 className="home-title">
                    For The Love <br className="desktop-line-break" /> of The
                    Game.
                </h1>
                <p className="standard-text home-a-subtitle">
                    Auckland University Esports Club (AUEC) is New Zealand's
                    <br className="desktop-line-break" /> biggest student
                    e-sports organization, empowering players{" "}
                    <br className="desktop-line-break" /> to compete and enjoy
                    gaming alongside their peers.
                </p>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform?usp=header"
                    target="_blank"
                    className="button-standard button-lime home-a-button"
                >
                    Sign up to <em>AUEC.</em>
                </a>
            </div>
        </section>
    );
}
