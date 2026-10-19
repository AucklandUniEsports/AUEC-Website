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
        <section className="home-b pb-24! md:pb-32!">
            <div className="home-b-top flex-wrap gap-x-4 gap-y-3">
                <h2 className="section-title">Community Partners</h2>
                <StandardButton
                    title="About Sponsorships."
                    color="grey"
                    link="/sponsors"
                />
            </div>
            <div className="grid grid-cols-2 gap-2.5 md:gap-4 min-[950px]:grid-cols-3">
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
