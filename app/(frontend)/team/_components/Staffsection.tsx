"use client";

import { useState } from "react";
import { DepartmentCard, type Department } from "./DepartmentCard";

// Placeholder data until department photos are added to /public/TeamPage
export const departments: Department[] = [
    {
        name: "Broadcast",
        description: "Placeholder description.",
        memberCount: 11,
        image: "/TeamPage/departments/Broadcast.webp",
    },
    {
        name: "Events",
        description: "Placeholder description.",
        memberCount: 0,
        image: "/TeamPage/departments/Events.webp",
    },
    {
        name: "Social",
        description: "Placeholder description.",
        memberCount: 0,
        image: "/TeamPage/departments/Social.webp",
    },
    {
        name: "Developers",
        description: "Placeholder description.",
        memberCount: 0,
        image: "/TeamPage/departments/Developers.webp",
    },
];

export function StaffSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="h-dvh">
            <div className="font-syne uppercase tracking-wider scale-y-80 pt-28">
                <h2 className="text-neon-green text-xl">The Staff Committee</h2>
                <h1 className="text-white text-5xl">Departments</h1>
            </div>

            {/* Gap between cards; the active one still sits on top so its shadow falls over the others */}
            <div className="flex justify-center gap-4 h-[753px] mt-12">
                {departments.map((department, i) => (
                    <DepartmentCard
                        key={department.name}
                        department={department}
                        isActive={i === activeIndex}
                        // Cards closer to the active one stack above those further away
                        zIndex={departments.length - Math.abs(i - activeIndex)}
                        onSelect={() => setActiveIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
}
