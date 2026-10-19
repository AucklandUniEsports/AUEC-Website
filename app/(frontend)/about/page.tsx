"use client";

import { useEffect, useRef, useState } from "react";
import AboutHero from "./_components/AboutHero";
import FeatureScroll from "./_components/FeatureScroll";

export default function About() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoOuterRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [winSize, setWinSize] = useState({ w: 1440, h: 900 });
    const [bannerHeightPx, setBannerHeightPx] = useState(585);

    useEffect(() => {
        const update = () => {
            setWinSize({ w: window.innerWidth, h: window.innerHeight });
            const hero = videoOuterRef.current?.previousElementSibling;
            if (hero) setBannerHeightPx(hero.getBoundingClientRect().height);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const outer = videoOuterRef.current;
            if (!outer) return;
            const fullExpansion = outer.offsetTop + window.innerHeight;
            const p = Math.min(Math.max(window.scrollY / fullExpansion, 0), 1);
            setProgress(p);
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleFirstScroll = () => {
            videoRef.current?.play().catch(() => {});
            window.removeEventListener("scroll", handleFirstScroll);
        };
        window.addEventListener("scroll", handleFirstScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleFirstScroll);
    }, []);

    const isMobile = winSize.w < winSize.h;
    const stickyPadding = winSize.w < 950 ? 64 : 128;
    const containerW = winSize.w - stickyPadding;
    const startHeightPx = isMobile ? winSize.h * 0.07 : winSize.h * 0.22;
    const finalHeightPx = isMobile
        ? Math.min(containerW * (16 / 9), winSize.h * 0.82)
        : Math.min(containerW * (10 / 16), winSize.h * 0.88);

    const expansion = Math.min(progress, 1);
    const bannerBottomInViewport = Math.max(0, bannerHeightPx - scrollY);
    const videoHeightPx =
        startHeightPx + expansion * (finalHeightPx - startHeightPx);
    const stickyTopPx =
        (bannerBottomInViewport + winSize.h - videoHeightPx) / 2;
    const outerPaddingTop = (winSize.h - bannerHeightPx - startHeightPx) / 2;
    const videoWidth = "100%";
    const videoHeight = `${videoHeightPx}px`;
    const captionProgress = Math.min(Math.max((expansion - 0.5) / 0.4, 0), 1);

    return (
        <div>
            <AboutHero />

            {/* Sticky scroll — expanding video */}
            <div
                ref={videoOuterRef}
                className="relative h-[182vh]"
                style={{ paddingTop: outerPaddingTop }}
            >
                <div
                    className="sticky flex justify-center px-16 max-[950px]:px-8"
                    style={{ top: stickyTopPx }}
                >
                    <div
                        className="relative overflow-hidden rounded-xl border border-[#aaa] will-change-[width,height]"
                        style={{ width: videoWidth, height: videoHeight }}
                    >
                        <video
                            ref={videoRef}
                            className="block h-full w-full object-cover object-[center_60%]"
                            src="/auec-about-trailer.mp4"
                            preload="auto"
                            muted
                            loop
                            playsInline
                        />
                        <p
                            className="pointer-events-none absolute right-8 bottom-6 left-8 origin-bottom-left scale-y-80 font-syne text-[clamp(1.5rem,4.2vw,3.75rem)] leading-none font-medium tracking-[0.075rem] text-white uppercase max-[950px]:right-5 max-[950px]:bottom-4 max-[950px]:left-5"
                            style={{
                                opacity: captionProgress,
                                transform: `translateY(${(1 - captionProgress) * 1.5}rem)`,
                            }}
                        >
                            For the love of the game
                        </p>
                    </div>
                </div>
            </div>

            <FeatureScroll />
        </div>
    );
}
