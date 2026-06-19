import SponsorCard from "../SponsorCard";

interface Sponsor {
    id: number;
    name: string;
    link: string;
    thumbnailPath: string;
}

export default function SponsorsSection({ sponsors }: { sponsors: Sponsor[] }) {
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
                {sponsors.map((sponsor) => (
                    <SponsorCard
                        link={sponsor.link}
                        img={sponsor.thumbnailPath}
                        key={sponsor.id}
                    />
                ))}
            </div>
        </section>
    );
}