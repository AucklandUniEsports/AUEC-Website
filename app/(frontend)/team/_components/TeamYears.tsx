"use client";

import { useState } from "react";
import { CURRENT_YEAR, teamByYear } from "../_data/team";
import { TeamHero } from "./TeamHero";
import { Roster } from "./Roster";
import { Departments } from "./Departments";
import { YearSwitcher } from "./YearSwitcher";

export function TeamYears() {
    const [year, setYear] = useState(CURRENT_YEAR);
    const team = teamByYear[year];

    return (
        <>
            <TeamHero />

            <div className="flex flex-col items-center gap-3 px-7 pt-0 sm:pt-2 md:pt-4 pb-10 md:pb-14">
                <p
                    id="committee-year-label"
                    className="font-syne text-white text-xs md:text-sm uppercase tracking-[0.2em]"
                >
                    Committee year
                </p>
                <YearSwitcher year={year} onChange={setYear} />
            </div>

            <Roster key={`execs-${year}`} execs={team.execs} />
            <Departments
                key={`departments-${year}`}
                departments={team.departments}
            />
        </>
    );
}
