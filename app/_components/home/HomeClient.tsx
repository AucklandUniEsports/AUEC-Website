"use client";
import EventCard from "../events/EventCard";

interface HomeClientProps {
    events: any[];
}

export default function HomeClient({ events }: HomeClientProps) {
    if (!events.length)
        return (
            <p className="placeholder-text">
                No featured events for now. Stay tuned!
            </p>
        );

    return (
        <>
            {events.map((event, index) => (
                <EventCard event={event} key={index} />
            ))}
        </>
    );
}
