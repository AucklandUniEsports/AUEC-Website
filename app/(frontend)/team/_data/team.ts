import type { TeamYear } from "./types";
import team2026 from "./years/2026";
export type { Exec, Member, Department, TeamYear } from "./types";

export const CURRENT_YEAR = 2026;

// Every committee year on the page. Each year's names, roles and photos are in ./years/<year>.ts.
// To add a year: copy ./years/2026.ts to a new file, fill it in, then add it here.
export const teamByYear: Record<number, TeamYear> = {
    2026: team2026,
};

export const years = Object.keys(teamByYear)
    .map(Number)
    .sort((a, b) => b - a);
