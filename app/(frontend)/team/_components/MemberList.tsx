"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Member } from "../_data/team";

export function MemberList({ members }: { members: Member[] }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.ul
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                staggerChildren: members.length > 10 ? 0.07 : 0.13,
                delayChildren: 0.45,
            }}
            className="grid grid-cols-[max-content_1fr] 2xl:grid-cols-[max-content_1fr_max-content_1fr] gap-y-4 mt-8 ml-2"
        >
            {members.map((member, i) => (
                <motion.li
                    key={i}
                    variants={{
                        hidden: { opacity: 0, x: -16 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="grid grid-cols-subgrid col-span-2"
                >
                    <span className="-skew-x-12 bg-[#272727] whitespace-nowrap px-4 py-1.5">
                        <span className="block skew-x-12 font-syne text-white/80 text-[11px] md:text-xs uppercase tracking-[0.12em]">
                            {member.role}
                        </span>
                    </span>
                    <span className="flex items-stretch gap-3 pl-2 pr-6">
                        <span
                            aria-hidden
                            className="-skew-x-12 w-0.5 bg-neon-green shrink-0"
                        />
                        <span className="self-center font-normal text-white/90 text-sm md:text-base uppercase tracking-[0.08em] leading-tight lg:whitespace-nowrap">
                            {member.name}
                        </span>
                    </span>
                </motion.li>
            ))}
        </motion.ul>
    );
}
