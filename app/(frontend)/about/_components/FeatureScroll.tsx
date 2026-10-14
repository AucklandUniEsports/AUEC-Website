"use client";

import { useEffect, useRef, useState } from "react";
import StandardButton from "../../_components/StandardButton";
import { features, type Feature } from "./features";

function keepInSlice(
    video: HTMLVideoElement,
    { start, end }: Feature["video"],
) {
    if (video.currentTime >= end || video.currentTime < start - 0.5) {
        video.currentTime = start;
    }
}

export default function FeatureScroll() {
    const [active, setActive] = useState(0);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const desktopVideos = useRef<(HTMLVideoElement | null)[]>([]);
    const mobileVideos = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(
                            Number((entry.target as HTMLElement).dataset.index),
                        );
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" },
        );
        sectionRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        [desktopVideos.current, mobileVideos.current].forEach((videos) =>
            videos.forEach((video, i) => {
                if (!video) return;
                if (i === active && video.offsetParent !== null) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            }),
        );
    }, [active]);

    return (
        <section className="grid grid-cols-[minmax(0,35fr)_minmax(0,65fr)] items-start gap-12 bg-[#1a1a1a] pt-[6.5vh] pb-20 pl-16 max-[950px]:grid-cols-1 max-[950px]:px-8 max-[950px]:pt-10 max-[950px]:pb-16">
            <div className="flex flex-col">
                {features.map((feature, i) => (
                    <article
                        key={feature.title}
                        data-index={i}
                        ref={(el) => {
                            sectionRefs.current[i] = el;
                        }}
                        className={`flex min-h-[80vh] flex-col justify-center gap-4 border-t border-[#333] transition-opacity duration-500 max-[950px]:min-h-0 max-[950px]:border-t-0 max-[950px]:pb-12 max-[950px]:opacity-100 ${i === active ? "opacity-100" : "opacity-40"}`}
                    >
                        <div className="relative -mx-8 -mb-12 hidden max-[950px]:block">
                            <video
                                ref={(el) => {
                                    mobileVideos.current[i] = el;
                                }}
                                className="block aspect-video w-full object-cover mask-[linear-gradient(to_bottom,transparent,black_25%,black_45%,transparent)]"
                                src={`${feature.video.src}#t=${feature.video.start}`}
                                onTimeUpdate={(e) =>
                                    keepInSlice(e.currentTarget, feature.video)
                                }
                                preload="metadata"
                                muted
                                loop
                                playsInline
                            />{" "}
                        </div>
                        <h2 className="relative font-syne text-[clamp(1.75rem,2.5vw,2.5rem)] leading-[0.9] font-medium tracking-[0.075rem] text-white uppercase">
                            {feature.title}
                        </h2>
                        <p className="max-w-120 text-[clamp(1rem,1.15vw,1.25rem)] leading-[1.4] text-white/80">
                            {feature.text}
                        </p>
                        {feature.button && (
                            <StandardButton
                                title={feature.button.title}
                                color="lime"
                                link={feature.button.link}
                            />
                        )}
                    </article>
                ))}
            </div>

            <div className="sticky top-[10vh] h-[80vh] overflow-hidden max-[950px]:hidden">
                {features.map((feature, i) => (
                    <video
                        key={feature.title}
                        ref={(el) => {
                            desktopVideos.current[i] = el;
                        }}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                        src={`${feature.video.src}#t=${feature.video.start}`}
                        onTimeUpdate={(e) =>
                            keepInSlice(e.currentTarget, feature.video)
                        }
                        preload="metadata"
                        muted
                        loop
                        playsInline
                    />
                ))}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-[#1a1a1a] to-transparent" />
            </div>
        </section>
    );
}
