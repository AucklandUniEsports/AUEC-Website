import StandardButton from "../StandardButton";

export default function HeroSection() {
    return (
        <section className="home-a atf-section">
            <div className="home-a-content">
                <h1 className="home-title">
                    For The Love <br /> of The Game.
                </h1>
                <p className="standard-text">
                    Auckland University Esports Club (AUEC) is New Zealand's
                    biggest student e-sports organization, empowering players to
                    compete and enjoy gaming with their peers.
                </p>
            </div>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform?usp=header"
                target="_blank"
                className="button-standard button-lime"
            >
                Sign up to AUEC.
            </a>
        </section>
    );
}