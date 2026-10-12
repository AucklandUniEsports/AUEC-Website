"use client";

import { SectionHeading } from "./SectionHeading";
import { RosterCard } from "./RosterCard";
import { useSpotlight } from "./useSpotlight";
import type { Exec } from "../_data/team";

// When the cards wrap (below lg: 2 per row on phones, 3 per row on tablets), they're shown in this order instead of the data order.
// Roles not listed here go after these, in the order they appear in the data.
const STACKED_ROLE_ORDER = [
    "President",
    "Vice President",
    "Treasurer",
    "Secretary",
    "Marketing",
];

export function Roster({ execs }: { execs: Exec[] }) {
    const gridRef = useSpotlight();

    const rank = (exec: Exec) => {
        const i = STACKED_ROLE_ORDER.indexOf(exec.role);
        return i === -1 ? STACKED_ROLE_ORDER.length + execs.indexOf(exec) : i;
    };
    const stacked = [...execs].sort((a, b) => rank(a) - rank(b));

    return (
        <section className="px-7 md:px-16 pb-16 md:pb-24">
            <SectionHeading label="The Board" title="Executives." />

            <div
                ref={gridRef}
                className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 transition-opacity duration-500 starting:opacity-0"
            >
                {execs.map((exec) => (
                    <RosterCard
                        key={exec.name}
                        exec={exec}
                        stackedPosition={stacked.indexOf(exec)}
                    />
                ))}
            </div>
        </section>
    );
}
