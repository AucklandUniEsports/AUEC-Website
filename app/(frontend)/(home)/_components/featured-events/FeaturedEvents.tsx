import EventCard from "../../../events/_components/EventCard";
import StandardButton from "../../../_components/StandardButton";
import FadeIn from "../../../_components/FadeIn";

interface FeaturedEventsProps {
    events: any[];
}

export default function FeaturedEvents({ events }: FeaturedEventsProps) {
    return (
        <section className="home-b">
            <div className="home-b-top flex-wrap gap-x-4 gap-y-3">
                <h2 className="section-title">Featured Events</h2>
                <StandardButton
                    title="Explore Events."
                    color="grey"
                    link="/events"
                />
            </div>
            <div className="events-wrapper">
                {events.length ? (
                    events.map((event, index) => (
                        <FadeIn key={index} delay={(index % 3) * 0.16}>
                            <EventCard event={event} />
                        </FadeIn>
                    ))
                ) : (
                    <p className="placeholder-text">
                        No featured events for now. Stay tuned!
                    </p>
                )}
            </div>
        </section>
    );
}
