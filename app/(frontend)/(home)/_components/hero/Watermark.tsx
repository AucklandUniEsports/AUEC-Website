"use client";

import { useEffect, useRef } from "react";
import { animate, type AnimationPlaybackControls } from "framer-motion";

// gap between flickers in ms
const MIN_GAP = 2000;
const MAX_GAP = 5000;

// first flicker kicks in quicker after page load
const FIRST_DELAY = 1000;

const random = (min: number, max: number) => min + Math.random() * (max - min);

// how fast it snaps on/off (seconds)
const SNAP = 0.015;

type Segment = [level: number, hold: number];

const randomInt = (min: number, max: number) =>
    min + Math.floor(Math.random() * (max - min + 1));

const blinks = (count: number): Segment[] =>
    Array.from({ length: count }).flatMap((): Segment[] => [
        [random(0.7, 1), random(0.04, 0.12)],
        [random(0, 0.1), random(0.03, 0.1)],
    ]);

const dropout = (): Segment => [random(0, 0.1), random(0.03, 0.08)];

// chances should add up to 1
const PATTERNS: { chance: number; build: () => Segment[] }[] = [
    { chance: 0.7, build: () => blinks(randomInt(3, 8)) },
    // flicker, flicker, on, flicker, off
    {
        chance: 0.3,
        build: () => [
            ...blinks(randomInt(2, 3)),
            [1, random(0.9, 1.2)],
            dropout(),
            ...blinks(randomInt(1, 2)),
        ],
    },
];

const countBlinks = (segments: Segment[]) =>
    segments.filter(([level]) => level > 0.5).length;

const pickPattern = () => {
    let roll = Math.random();
    for (const pattern of PATTERNS) {
        roll -= pattern.chance;
        if (roll < 0) return pattern;
    }
    return PATTERNS[0];
};

// keeps re-rolling so we never get the same blink count twice in a row
const makeFlicker = (previousCount: number) => {
    let segments: Segment[];
    do {
        segments = pickPattern().build();
    } while (countBlinks(segments) === previousCount);

    const values = [0];
    const offsets = [0];
    let t = 0;
    for (const [level, hold] of segments) {
        t += SNAP;
        values.push(level);
        offsets.push(t);
        t += hold;
        values.push(level);
        offsets.push(t);
    }
    t += SNAP;
    values.push(0);
    offsets.push(t);

    return {
        values,
        times: offsets.map((o) => o / t),
        duration: t,
        count: countBlinks(segments),
    };
};

const LETTERS = "AUEC";

// all layers are the same text stacked on each other so they line up
const layer = "absolute inset-0";

export default function Watermark() {
    const litRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const lit = litRef.current;
        if (!lit) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;

        let flicker: AnimationPlaybackControls | undefined;
        let timeout: ReturnType<typeof setTimeout> | undefined;
        let previousCount = 0;

        const scheduleFlicker = (delay = random(MIN_GAP, MAX_GAP)) => {
            timeout = setTimeout(() => {
                const { values, times, duration, count } =
                    makeFlicker(previousCount);
                previousCount = count;
                flicker = animate(
                    lit,
                    { opacity: values },
                    {
                        duration,
                        times,
                        ease: "linear",
                        onComplete: () => scheduleFlicker(),
                    },
                );
            }, delay);
        };

        scheduleFlicker(FIRST_DELAY);

        return () => {
            flicker?.stop();
            clearTimeout(timeout);
        };
    }, []);

    return (
        <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 -skew-x-[11deg] [font-family:Switzer] text-[clamp(490px,30vw,614px)] leading-[0.8] font-medium tracking-[-0.1em] whitespace-nowrap text-transparent uppercase select-none max-[700px]:top-2/5 max-[700px]:text-[70vw]"
        >
            <span className="block [-webkit-text-stroke:5px_rgba(64,40,120,0.65)]">
                {LETTERS}
            </span>
            <span
                className={`${layer} [-webkit-text-stroke:1px_rgba(205,196,230,0.12)]`}
            >
                {LETTERS}
            </span>

            <span ref={litRef} className={`${layer} opacity-0`}>
                <span className="block [-webkit-text-stroke:5px_rgb(156,114,255)] [filter:drop-shadow(0_0_6px_rgba(156,114,255,0.9))_drop-shadow(0_0_24px_rgba(156,114,255,0.6))_drop-shadow(0_0_60px_rgba(156,114,255,0.35))]">
                    {LETTERS}
                </span>
                <span
                    className={`${layer} [-webkit-text-stroke:1.5px_rgb(240,232,255)]`}
                >
                    {LETTERS}
                </span>
            </span>
        </span>
    );
}
