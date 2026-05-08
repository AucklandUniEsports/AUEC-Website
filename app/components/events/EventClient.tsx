"use client";
import { useState } from "react";
import EventCard from "./EventCard";
import Events from "@/app/events/page";
import SearchBar from "./SearchBar";

interface Events {
    CategoriesOnEvents: {
        Category: {
            id: number;
            createdAt: Date;
            name: string;
        };
        eventId: number;
        categoryId: number;
        assignedAt: Date;
    }[];
    Location: {
        id: number;
        createdAt: Date;
        name: string;
        color: string;
    };
    link: string;
    id: number;
    createdAt: Date;
    name: string;
    date: Date;
    description: string;
    locationId: number;
    thumbnailPath: string;
}

export default function EventClient({ events }: { events: Events[] }) {
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState<Events[]>([]);
    const handleChange = (value: string) => {
        setInput(value);
        const filtered = events.filter((event) =>
            event.name.toLowerCase().includes(input.toLowerCase()),
        );
        setSuggestion(filtered);
    };

    return (
        <>
            <SearchBar input={input} handleChange={handleChange} />
            {input.trim() ? (
                <div className="events-wrapper">
                    {suggestion &&
                        suggestion.map((event, index) => (
                            <EventCard event={event} key={index} />
                        ))}
                </div>
            ) : (
                <div className="events-wrapper">
                    {events.map((event, index) => (
                        <EventCard event={event} key={index} />
                    ))}
                </div>
            )}
        </>
    );
}
