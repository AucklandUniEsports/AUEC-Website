"use client";
import { useState } from "react";
import EventCard from "./EventCard";
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
    const sortedEvents = [...events].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    const handleChange = (value: string) => {
        setInput(value);

        const filtered = sortedEvents.filter((event) =>
            event.name.toLowerCase().includes(value.toLowerCase()),
        );

        setSuggestion(filtered);
    };

    return (
        <>
            <SearchBar input={input} handleChange={handleChange} />
            {input.trim() ? (
                suggestion.length > 0 ? (
                    <div className="events-wrapper">
                        {suggestion.map((event, index) => (
                            <EventCard event={event} key={index} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-2 py-16 text-center">
                        <p className="font-[Syne] text-2xl font-medium tracking-[1.2px] text-white uppercase">
                            No events found
                        </p>
                        <p className="font-[Syne] text-[#777777]">
                            Nothing matches &ldquo;{input.trim()}&rdquo;. Try a
                            different search.
                        </p>
                    </div>
                )
            ) : (
                <div className="events-wrapper">
                    {sortedEvents.map((event, index) => (
                        <EventCard event={event} key={index} />
                    ))}
                </div>
            )}
        </>
    );
}
