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
            className="group block h-full cursor-pointer bg-linear-to-b from-[#222222] from-22% to-neon-purple to-76% p-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href={event.link}
        >
            <div className="flex h-full flex-col bg-[#272727]">
                <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                        className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
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

                <div className="flex flex-1 flex-col px-5 pt-3 pb-5">
                    {event.CategoriesOnEvents.length > 0 && (
                        <ul className="flex flex-wrap gap-1.5">
                            {event.CategoriesOnEvents.map(({ Category }) => (
                                <li
                                    key={Category.id}
                                    className="-skew-x-12 bg-[#1a1a1a] px-2.5 py-1"
                                >
                                    <span className="block skew-x-12 font-syne text-[10px] leading-none tracking-[0.12em] text-white uppercase">
                                        {Category.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <h3 className="mt-2 line-clamp-2 origin-bottom-left scale-y-80 font-syne text-xl leading-[0.95] font-medium tracking-[0.04em] text-white uppercase md:text-2xl">
                        {event.name}
                    </h3>
                    <div className="my-3 h-px w-10 bg-neon-purple transition-all duration-500 group-hover:w-full" />
                    <p className="mt-auto flex flex-wrap items-center gap-x-3 font-syne text-[11px] tracking-[0.12em] text-white uppercase md:text-xs">
                        <span className="font-syne">{displayDate}</span>
                        <span
                            aria-hidden
                            className="h-3 w-0.5 -skew-x-12 bg-neon-green"
                        />
                        <span className="font-syne">Esports Arena</span>
                    </p>
                </div>
            </div>
        </a>
    );
}
