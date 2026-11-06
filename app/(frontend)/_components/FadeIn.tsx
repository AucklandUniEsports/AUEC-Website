"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
    motion,
    useAnimation,
    useInView,
    useReducedMotion,
} from "framer-motion";

type FadeInProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export default function FadeIn({ children, className, delay }: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const reduceMotion = useReducedMotion();

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className="relative">
            <motion.div
                className={`h-full ${className ?? ""}`}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{
                    duration: 0.7,
                    delay: delay,
                }}
                initial={reduceMotion ? "visible" : "hidden"}
                animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    );
}
