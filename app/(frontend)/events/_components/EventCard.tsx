"use client";

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
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC", // already midnight UTC so render as-is
    });

    const badgeColor =
        daysUntil === 0
            ? "bg-[#ff3b3b] text-white"
            : daysUntil > 0
              ? "bg-neon-green text-black"
              : "bg-black/70 text-white";

    return (
        <a
            className="group flex cursor-pointer flex-col overflow-hidden bg-[#232323] transition-[box-shadow] duration-200 ease-out hover:shadow-[0_0_1.5rem_rgb(170_170_170/0.35)] hover:ring-[0.03125rem] hover:ring-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
            href={event.link}
        >
            <div className="relative aspect-video overflow-hidden bg-black">
                <img
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                    src={
                        "https://hizvklozfaxggijszcab.supabase.co/storage/v1/object/public/event_thumbnails/" +
                        event.thumbnailPath
                    }
                    alt=""
                />
                <span
                    className={`absolute top-3 left-3 -skew-x-12 px-2.5 py-1 ${badgeColor}`}
                >
                    <span className="flex skew-x-12 items-center gap-1.5 font-syne text-[11px] leading-none tracking-widest uppercase">
                        {daysUntil === 0 && (
                            <span className="size-1.5 rounded-full bg-white motion-safe:animate-pulse" />
                        )}
                        {getEventDateText(daysUntil)}
                    </span>
                </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4">
                {event.CategoriesOnEvents.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5">
                        {event.CategoriesOnEvents.map(({ Category }) => (
                            <li
                                key={Category.id}
                                className="bg-white/6 px-2 py-1 font-syne text-[10px] leading-none tracking-widest text-white uppercase"
                            >
                                {Category.name}
                            </li>
                        ))}
                    </ul>
                )}
                <h3 className="line-clamp-2 font-syne text-lg leading-tight font-medium text-white">
                    {event.name}
                </h3>
                <p className="mt-auto flex flex-wrap items-center gap-x-2 text-xs text-white">
                    {displayDate}
                    <span>Esports Arena</span>
                </p>
            </div>
        </a>
    );
}
