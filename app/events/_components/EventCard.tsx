"use client";

import CategoryTag from "../../components/CategoryTag";
import { useState } from "react";

interface EventCardProps {
    event: {
        id: number;
        createdAt: Date;
        name: string;
        date: Date;
        description: string;
        link: string;
        locationId: number;
        thumbnailPath: string;
        CategoriesOnEvents: {
            Category: {
                id: number;
                name: string;
            };
        }[];
    };
}

function getEventDateText(daysUntil: number): string {
    if (daysUntil > 1) return `IN ${daysUntil} DAYS`;
    if (daysUntil === 1) return "TOMORROW";
    if (daysUntil === 0) return "TODAY";
    if (daysUntil === -1) return "YESTERDAY";
    return `${Math.abs(daysUntil)} DAYS AGO`;
}

export default function EventCard({ event }: EventCardProps) {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Pacific/Auckland",
    };

    const [currentDate] = useState(() => new Date());
    const nzDateFormatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Pacific/Auckland",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    const eventDateNZ = new Date(
        nzDateFormatter.format(new Date(event.date)) + "T00:00:00",
    );
    const currentDateNZ = new Date(
        nzDateFormatter.format(currentDate) + "T00:00:00",
    );

    const date = new Date(event.date).toLocaleDateString("en-NZ", options);
    const oneDayMs = 1000 * 60 * 60 * 24; // 86,400,000 milliseconds
    const daysUntil = Math.floor(
        (eventDateNZ.getTime() - currentDateNZ.getTime()) / oneDayMs,
    );
    return (
        <a className="event-card" href={event.link}>
            <div className="event-card-top">
                <div className="category-wrapper">
                    <div className="category-wrapper">
                        {event.CategoriesOnEvents.map(({ Category }) => (
                            <CategoryTag
                                key={Category.id}
                                name={Category.name}
                            />
                        ))}
                    </div>
                </div>
                <p className="event-card-countdown">
                    {getEventDateText(daysUntil)}
                </p>
            </div>
            <img
                className="event-card-thumbnail"
                src={
                    "https://hizvklozfaxggijszcab.supabase.co/storage/v1/object/public/event_thumbnails/" +
                    event.thumbnailPath
                }
                alt=""
            />
            <p className="event-card-info">
                {date} | <span>Esports Arena</span>
            </p>
            <p className="event-card-title">{event.name}</p>
        </a>
    );
}
