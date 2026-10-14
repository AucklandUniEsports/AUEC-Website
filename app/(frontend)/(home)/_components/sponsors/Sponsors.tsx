import SponsorCard from "../../../_components/SponsorCard";
import StandardButton from "../../../_components/StandardButton";

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
                <StandardButton
                    title="About Sponsorships."
                    color="grey"
                    link="/AUEC-2026-Sponsorship-Deck.pdf"
                    external
                />
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
