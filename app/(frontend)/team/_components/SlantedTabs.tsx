"use client";

import { motion, useReducedMotion } from "framer-motion";
import StandardButton from "../../_components/StandardButton";

export function SlantedTabs<T extends string | number>({
    options,
    value,
    onChange,
    labelledBy,
    ariaLabel,
    align = "center",
    size = "default",
    stagger = true,
}: {
    options: T[];
    value: T;
    onChange: (value: T) => void;
    labelledBy?: string;
    ariaLabel?: string;
    align?: "center" | "start";
    size?: "default" | "small";
    stagger?: boolean;
}) {
    const reduceMotion = useReducedMotion();

    return (
        <div
            role="group"
            aria-labelledby={labelledBy}
            aria-label={ariaLabel}
            className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}
        >
            {options.map((option, i) => {
                const isSelected = option === value;
                return (
                    <motion.div
                        key={option}
                        initial={
                            reduceMotion || !stagger
                                ? false
                                : { opacity: 0, y: 16 }
                        }
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: "easeOut",
                        }}
                    >
                        <StandardButton
                            title={option}
                            color={isSelected ? "lime" : "dark"}
                            size={size}
                            onClick={() => onChange(option)}
                            pressed={isSelected}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}
