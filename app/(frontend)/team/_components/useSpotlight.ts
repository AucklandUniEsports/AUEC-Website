import { useEffect, useRef } from "react";

export function useSpotlight() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    entry.target.toggleAttribute(
                        "data-spotlight",
                        entry.isIntersecting,
                    );
                }
            },
            { rootMargin: "-40% 0px -40% 0px" },
        );
        grid.querySelectorAll("[data-exec-card]").forEach((card) =>
            observer.observe(card),
        );
        return () => observer.disconnect();
    }, []);

    return gridRef;
}
