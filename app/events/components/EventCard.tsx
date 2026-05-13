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

function parseDateParts(date: Date | string): {
    year: number;
    month: number;
    day: number;
} {
    const iso = typeof date === "string" ? date : date.toISOString();
    const [year, month, day] = iso.split("T")[0].split("-").map(Number);
    return { year, month, day };
}

function toUTCMidnight({
    year,
    month,
    day,
}: {
    year: number;
    month: number;
    day: number;
}): Date {
    return new Date(Date.UTC(year, month - 1, day));
}

export default function EventCard({ event }: EventCardProps) {
    const [currentDate] = useState(() => new Date());

    const eventParts = parseDateParts(event.date);

    const nzFormatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Pacific/Auckland",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    const [cy, cm, cd] = nzFormatter.format(currentDate).split("-").map(Number);

    const eventMidnight = toUTCMidnight(eventParts);
    const currentMidnight = toUTCMidnight({ year: cy, month: cm, day: cd });

    const oneDayMs = 1000 * 60 * 60 * 24;
    const daysUntil = Math.round(
        (eventMidnight.getTime() - currentMidnight.getTime()) / oneDayMs,
    );

    const displayDate = new Date(
        Date.UTC(eventParts.year, eventParts.month - 1, eventParts.day),
    ).toLocaleDateString("en-NZ", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC", // already midnight UTC so render as-is
    });

    return (
        <a className="event-card" href={event.link}>
            <div className="event-card-top">
                <div className="category-wrapper">
                    {event.CategoriesOnEvents.map(({ Category }) => (
                        <CategoryTag key={Category.id} name={Category.name} />
                    ))}
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
                {displayDate} | <span>Esports Arena</span>
            </p>
            <p className="event-card-title">{event.name}</p>
        </a>
    );
}
