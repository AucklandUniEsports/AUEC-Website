"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "../../_components/FadeIn";

export function SectionHeading({
    label,
    title,
    count,
    children,
}: {
    label: string;
    title: string;
    count?: string;
    children?: ReactNode;
}) {
    const reduceMotion = useReducedMotion();

    return (
        <div className="relative flex items-end justify-between gap-6 pb-4">
            <FadeIn>
                <div className="font-syne uppercase">
                    <p className="text-neon-green text-sm md:text-lg tracking-[0.2em]">
                        {label}
                    </p>
                    <h2 className="text-white text-[40px] md:text-[72px] font-medium leading-[0.8] tracking-[1.2px] scale-y-75 origin-bottom-left">
                        {title}
                    </h2>
                </div>
            </FadeIn>
            {count && (
                <p className="hidden md:block font-syne text-white/60 text-lg uppercase tracking-[0.2em] whitespace-nowrap">
                    {count}
                </p>
            )}
            {children}
            <motion.span
                aria-hidden
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#888888]"
            />
        </div>
    );
}
