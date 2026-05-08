import SponsorCard from "../SponsorCard";

const sponsors = [
    {
        link: "https://www.facebook.com/StandingFierce/",
        img: "standing-fierce.webp",
    },
    {
        link: "https://zowie.benq.com/en-au/index.html",
        img: "zowie.webp",
    },
    {
        link: "https://gameon.co.nz/",
        img: "game-on.webp",
    },
    {
        link: "https://www.auckland.ac.nz/en/on-campus/facilities-and-services/sport-and-recreation/sport/EsportsArena.html",
        img: "esports-arena.webp",
    },
];

export default function SponsorsSection() {
    return (
        <section className="home-b">
            <div className="home-b-top">
                <h2 className="section-title">Community Partners</h2>
                <a
                    href="AUEC 2026 Sponsorship Deck.pdf"
                    target="_blank"
                    className="button-standard button-grey"
                >
                    About Sponsorships.
                </a>
            </div>
            <div className="sponsor-wrapper">
                {sponsors.map((sponsor, index) => (
                    <SponsorCard
                        link={sponsor.link}
                        img={sponsor.img}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
}