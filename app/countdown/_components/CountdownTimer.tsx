"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function getTimeLeft(target: Date) {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
}

function pad(n: number) {
    return String(n).padStart(2, "0");
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            const t = getTimeLeft(targetDate);
            if (!t) {
                clearInterval(interval);
                router.push("/merch");
                return;
            }
            setTimeLeft(t);
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate, router]);

    if (!timeLeft) return null;

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <div className="text-5xl text-white sm:text-7xl md:text-8xl lg:text-9xl font-times-stretched">
            {pad(days)}:{pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </div>
    );
}
