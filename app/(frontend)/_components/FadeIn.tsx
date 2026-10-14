"use client";

import {
    useEffect,
    useRef,
    useState,
    type ElementType,
    type ReactNode,
} from "react";

type FadeInProps = {
    as?: ElementType;
    variant?: "up" | "in";
    delay?: number;
    triggerAt?: string;
    className?: string;
    children: ReactNode;
};

export default function FadeIn({
    as: Tag = "div",
    variant = "up",
    delay = 0,
    triggerAt = "10%",
    className = "",
    children,
}: FadeInProps) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: `0px 0px -${triggerAt} 0px` },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [triggerAt]);

    return (
        <Tag
            ref={ref}
            className={`${visible ? (variant === "in" ? "animate-fade-in" : "animate-fade-up") : "opacity-0"} motion-reduce:animate-none motion-reduce:opacity-100 ${className}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {children}
        </Tag>
    );
}
