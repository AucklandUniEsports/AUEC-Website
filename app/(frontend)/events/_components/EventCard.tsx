"use client";

import CategoryTag from "../../_components/CategoryTag";
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
    if (daysUntil > 1) return `In ${daysUntil} days`;
    if (daysUntil === 1) return "Tomorrow";
    if (daysUntil === 0) return "LIVE NOW!";
    if (daysUntil === -1) return "Yesterday";
    return `${Math.abs(daysUntil)} days ago`;
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
        <a
            className="flex cursor-pointer flex-col rounded-[5px] bg-[#272727] px-3 pt-3 pb-5 transition-shadow duration-200 ease-out hover:shadow-[0_0_1.5rem_rgb(170_170_170/0.35)] hover:ring-[0.03125rem] hover:ring-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
            href={event.link}
        >
            <div className="mb-3 flex items-center justify-between gap-3">
                <ul className="flex flex-wrap gap-2">
                    {event.CategoriesOnEvents.map(({ Category }) => (
                        <CategoryTag key={Category.id} name={Category.name} />
                    ))}
                </ul>
                <p className="flex shrink-0 items-center gap-2 font-syne text-xs tracking-[0.1em] text-white">
                    {daysUntil === 0 && (
                        <span className="size-1.5 rounded-full bg-[#ff3b3b] motion-safe:animate-pulse" />
                    )}
                    {getEventDateText(daysUntil)}
                </p>
            </div>
            <img
                className="aspect-video w-full object-cover"
                src={
                    "https://hizvklozfaxggijszcab.supabase.co/storage/v1/object/public/event_thumbnails/" +
                    event.thumbnailPath
                }
                alt=""
            />
            <p className="mt-2 text-center text-xs tracking-[-0.02em] text-[#aaa]">
                {displayDate} |{" "}
                <span className="text-[#5aa9ff]">Esports Arena</span>
            </p>
            <p className="mt-2 text-center text-base leading-tight font-semibold tracking-[-0.03em] text-white">
                {event.name}
            </p>
        </a>
    );
}
