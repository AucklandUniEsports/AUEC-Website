import { years } from "../_data/team";
import { SlantedTabs } from "./SlantedTabs";

export function YearSwitcher({
    year,
    onChange,
}: {
    year: number;
    onChange: (year: number) => void;
}) {
    return (
        <SlantedTabs
            options={years}
            value={year}
            onChange={onChange}
            labelledBy="committee-year-label"
        />
    );
}
