import { redirect } from "next/navigation";
import { BackgroundImage } from "./_components/BackgroundImage";
import { CountdownTimer } from "./_components/CountdownTimer";

const TARGET_DATE = new Date(Date.UTC(2026, 5, 15, 0, 0, 0));

export default function Countdown() {
    if (Date.now() >= TARGET_DATE.getTime()) {
        redirect("/merch");
    }

    return (
        <div className="relative h-dvh w-full overflow-hidden">
            <BackgroundImage />
            <div className="absolute inset-0 flex items-center justify-center">
                <CountdownTimer targetDate={TARGET_DATE} />
            </div>
        </div>
    );
}
