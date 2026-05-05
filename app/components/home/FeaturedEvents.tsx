import StandardButton from "../StandardButton";
import HomeClient from "./HomeClient";

interface FeaturedEventsSectionProps {
    events: any[];
}

export default function FeaturedEventsSection({
    events,
}: FeaturedEventsSectionProps) {
    return (
        <section className="home-b">
            <div className="home-b-top">
                <h2 className="section-title">Featured Events</h2>
                <StandardButton
                    title="Explore Events."
                    color="grey"
                    link="/events"
                />
            </div>
            <div className="events-wrapper">
                <HomeClient events={events} />
            </div>
        </section>
    );
}
