"use client";
<<<<<<< HEAD
interface Input {
    input: string;
    handleChange: (value: string) => void;
}

export default function SearchBar({ input, handleChange }: Input) {
    return (
        <input
            className="searchbar"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
        ></input>
=======
import { useState } from "react";
import EventCard from "./EventCard";
import Events from "@/app/events/page";

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

export default function SearchBar({ events }: { events: Events[] }) {
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState<Events[]>([]);
    const handleChange = (input: string) => {
        setInput(input);
        if (!input.trim()) {
            setSuggestion([]);
            return;
        }
        const filtered = events.filter((event) =>
            event.name.toLowerCase().includes(input.toLowerCase()),
        );
        setSuggestion(filtered);
    };
    return (
        <>
            <input
                className="searchbar"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            ></input>
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
>>>>>>> aa8c46f749e575e254e603846dce5e0730c6f996
    );
}
