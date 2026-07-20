import EventCard from "../../events/_components/EventCard";

interface FeaturedEventsProps {
    events: any[];
}

export default function FeaturedEvents({ events }: FeaturedEventsProps) {
    if (!events.length) {
        return (
            <p className="placeholder-text">
                No featured events for now. Stay tuned!
            </p>
        );
    }

    return (
        <>
            {events.map((event, index) => (
                <EventCard event={event} key={index} />
            ))}
        </>
    );
}
