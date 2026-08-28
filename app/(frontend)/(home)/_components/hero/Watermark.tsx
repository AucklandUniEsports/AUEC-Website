"use client";

import { useEffect, useRef } from "react";
import { animate, type AnimationPlaybackControls } from "framer-motion";

const strokeColor = (alpha: number) => `rgba(156, 114, 255, ${alpha})`;

const glow = (alpha: number) =>
    alpha <= 0.02
        ? "none"
        : `drop-shadow(0 0 3px rgba(156, 114, 255, ${(alpha * 0.95).toFixed(2)})) drop-shadow(0 0 8px rgba(156, 114, 255, ${(alpha * 0.5).toFixed(2)}))`;

const POWER_ON_VALUES = [0.05, 0.05, 0.15, 0.06, 0.06, 0.3, 0.18, 0.18, 0.65, 0.35, 0.35, 0.9, 1, 1];
const POWER_ON_TIMES = [0, 0.15, 0.18, 0.21, 0.38, 0.41, 0.44, 0.6, 0.63, 0.66, 0.8, 0.83, 0.86, 1];
const POWER_ON_DURATION = 3;

const IDLE_VALUES = [1, 1, 0.06, 1, 0.08, 1, 1];
const IDLE_TIMES = [0, 0.909, 0.924, 0.945, 0.967, 0.996, 1];
const IDLE_DURATION = 4.4;

export default function Watermark() {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const apply = (alpha: number) => {
            el.style.setProperty("-webkit-text-stroke-color", strokeColor(alpha));
            el.style.filter = glow(alpha);
        };

        apply(POWER_ON_VALUES[0]);

        let idle: AnimationPlaybackControls | undefined;

        const powerOn = animate(POWER_ON_VALUES[0], POWER_ON_VALUES, {
            duration: POWER_ON_DURATION,
            times: POWER_ON_TIMES,
            ease: "easeOut",
            onUpdate: apply,
            onComplete: () => {
                idle = animate(IDLE_VALUES[0], IDLE_VALUES, {
                    duration: IDLE_DURATION,
                    times: IDLE_TIMES,
                    repeat: Infinity,
                    onUpdate: apply,
                });
            },
        });

        return () => {
            powerOn.stop();
            idle?.stop();
        };
    }, []);

    return (
        <span
            ref={ref}
            aria-hidden="true"
            className="pointer-events-none absolute top-[40vh] left-[13vw] z-0 origin-top-left -skew-x-[11deg] [font-family:Switzer] text-[clamp(260px,30vw,900px)] leading-[0.8] font-medium tracking-[-0.1em] whitespace-nowrap text-transparent uppercase select-none [-webkit-text-stroke:1.5px_rgba(156,114,255,1)] max-[950px]:top-auto max-[950px]:bottom-[6vh] max-[950px]:left-[2vw] max-[950px]:text-[clamp(160px,30vw,320px)] max-[700px]:static max-[700px]:mx-[-100px] max-[700px]:mt-0 max-[700px]:mr-[-32px] max-[700px]:mb-0 max-[700px]:block max-[700px]:px-3 max-[700px]:py-0 max-[700px]:text-[70vw]"
        >
            AUEC
        </span>
    );
}
