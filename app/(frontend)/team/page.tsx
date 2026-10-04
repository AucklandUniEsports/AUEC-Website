import { ExecBoard } from "./_components/ExecBoard";
import { StaffSection } from "./_components/Staffsection";
import { TeamHero } from "./_components/TeamHero";

export default function Team() {
    return (
        <div>
            <TeamHero />
            <ExecBoard />
            <StaffSection />
        </div>
    );
}
