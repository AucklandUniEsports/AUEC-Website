"use client";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";

interface HomeClientProps {
    endpoint: string;
}

export default function HomeClient({ endpoint }: HomeClientProps) {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                const upcoming = data.data
                    .filter((event: any) => new Date(event.date) >= today)
                    .sort(
                        (a: any, b: any) =>
                            new Date(a.date).getTime() -
                            new Date(b.date).getTime(),
                    )
                    .slice(0, 3);

                setEvents(upcoming);
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
