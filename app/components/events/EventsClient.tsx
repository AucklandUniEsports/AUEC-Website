"use client";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";

interface EventsClientProps {
    endpoint: string;
}

export default function EventsClient({ endpoint }: EventsClientProps) {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                setEvents(data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch events:", err);
                setIsLoading(false);
            });
    }, [endpoint]);

    if (isLoading) return <p>Loading events...</p>;
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
