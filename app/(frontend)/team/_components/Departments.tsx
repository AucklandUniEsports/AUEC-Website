"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { SlantedTabs } from "./SlantedTabs";
import type { Department } from "../_data/team";

export function Departments({ departments }: { departments: Department[] }) {
    const [selectedName, setSelectedName] = useState(departments[0]?.name);
    const department = departments.find((d) => d.name === selectedName);

    if (!department) return null;

    return (
        <section className="px-7 md:px-16 pt-12 pb-24">
            <SectionHeading label="The Staff Committee" title="Departments." />

            <div className="mt-8">
                <SlantedTabs
                    options={departments.map((d) => d.name)}
                    value={department.name}
                    onChange={setSelectedName}
                    ariaLabel="Department"
                    align="start"
                    size="small"
                />
            </div>

            <div
                key={department.name}
                className="grid lg:grid-cols-2 xl:grid-cols-[2fr_3fr] gap-8 lg:gap-12 mt-10 transition-opacity duration-500 starting:opacity-0"
            >
                <div className="self-start w-full aspect-[9/10] p-px bg-linear-to-b from-[#222222] from-22% to-neon-purple to-76%">
                    <div className="relative h-full w-full overflow-hidden">
                        <Image
                            src={department.image}
                            alt={`The ${department.name} team`}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover object-[50%_70%]"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <h3 className="font-syne text-white text-[40px] md:text-[56px] font-medium uppercase leading-[0.8] tracking-[1.2px] scale-y-75 origin-bottom-left">
                        {department.name}
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-snug mt-4">
                        {department.description}
                    </p>

                    <ul className="grid grid-cols-[max-content_1fr] 2xl:grid-cols-[max-content_1fr_max-content_1fr] gap-y-4 mt-8 ml-2">
                        {department.members.map((member, i) => (
                            <li
                                key={i}
                                className="grid grid-cols-subgrid col-span-2"
                            >
                                <span className="-skew-x-12 bg-[#272727] whitespace-nowrap px-4 py-1.5">
                                    <span className="block skew-x-12 font-syne text-white/80 text-[11px] md:text-xs uppercase tracking-[0.12em]">
                                        {member.role}
                                    </span>
                                </span>
                                <span className="flex items-stretch gap-3 pl-2 pr-6">
                                    <span
                                        aria-hidden
                                        className="-skew-x-12 w-0.5 bg-neon-green shrink-0"
                                    />
                                    <span className="self-center font-normal text-white/90 text-sm md:text-base uppercase tracking-[0.08em] leading-tight lg:whitespace-nowrap">
                                        {member.name}
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
