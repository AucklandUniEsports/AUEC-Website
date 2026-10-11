"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { SlantedTabs } from "./SlantedTabs";
import { DepartmentPanel } from "./DepartmentPanel";
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

            <DepartmentPanel key={department.name} department={department} />
        </section>
    );
}
