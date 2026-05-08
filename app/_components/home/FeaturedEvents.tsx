import EventCard from "../events/EventCard";
import StandardButton from "../StandardButton";

interface FeaturedEventsProps {
    events: any[];
}

export default function FeaturedEvents({ events }: FeaturedEventsProps) {
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
                {events.length ? (
                    events.map((event, index) => (
                        <EventCard event={event} key={index} />
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
