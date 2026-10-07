"use client";

import { useEffect, useRef, useState } from "react";
import StandardButton from "../_components/StandardButton";

export default function About() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);
    const videoOuterRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [progress, setProgress] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [winSize, setWinSize] = useState({ w: 1440, h: 900 });

    useEffect(() => {
        const update = () =>
            setWinSize({ w: window.innerWidth, h: window.innerHeight });
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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            { threshold: 0.45 }
        );
        sectionRefs.current.forEach((el) => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        videoRef.current?.play().catch(() => {});
    }, []);

    useEffect(() => {
        const handleFirstScroll = () => {
            video2Ref.current?.play().catch(() => {});
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
    const bannerHeightPx = winSize.h * (isMobile ? 0.78 : 0.65);
    const bannerBottomInViewport = Math.max(0, bannerHeightPx - scrollY);
    const videoHeightPx = startHeightPx + expansion * (finalHeightPx - startHeightPx);
    const stickyTopPx = (bannerBottomInViewport + winSize.h - videoHeightPx) / 2;
    const outerPaddingTop = (winSize.h - bannerHeightPx - startHeightPx) / 2;
    const videoWidth = "100%";
    const videoHeight = `${videoHeightPx}px`;

    return (
        <main>
            {/* Banner */}
            <section className="about-banner">
                <img
                    src="/auec-about-landing.png"
                    className="about-hero-banner"
                    alt=""
                />
                <div className="about-banner-content">
                    <h1 className="home-title">ABOUT AUEC.</h1>
                    <p className="about-hero-description">
                        The Auckland University Esports Club is a student
                        association operated by students studying at the
                        University of Auckland, aiming to cultivate a thriving
                        community of people with a passion for gaming and
                        competition.
                    </p>
                </div>
            </section>

            {/* Sticky scroll — expanding video */}
            <div ref={videoOuterRef} className="about-video-outer" style={{ paddingTop: outerPaddingTop }}>
                <div className="about-video-sticky" style={{ top: stickyTopPx }}>
                    <div
                        className="about-video-expand"
                        style={{ width: videoWidth, height: videoHeight }}
                    >
                        <video
                            ref={videoRef}
                            className="about-video"
                            src="/auec-interclub-about-page.mp4"
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </div>
            </div>

            {/* Two-column section */}
            <div className="about-columns">
                {/* Left: scrolling sections */}
                <div className="about-columns-left">
                    <div className="about-col-sticky-wrapper">
                        <video
                            className="about-col-section-video"
                            src="/auec-promotional-reel-about-page.mp4"
                            muted
                            loop
                            autoPlay
                            playsInline
                        />
                        <div className="about-col-section" ref={(el) => { sectionRefs.current[0] = el; }}>
                            <span className="about-col-number">01</span>
                            <h2 className="about-col-title">
                                FOR THE{" "}
                                <span className="about-new-section-highlight">
                                    PLAYERS.
                                </span>
                            </h2>
                            <p className="standard-text">
                                Our team at AUEC is focused on providing a platform
                                where everyone can enjoy gaming to their heart&apos;s
                                content. We are dedicated to providing quality events
                                and opportunities for talent to compete in.
                            </p>
                        </div>

                        <div className="about-col-section" ref={(el) => { sectionRefs.current[1] = el; }}>
                            <span className="about-col-number">02</span>
                            <h2 className="about-col-title">
                                BEHIND THE{" "}
                                <span className="about-new-section-highlight">
                                    SCENES.
                                </span>
                            </h2>
                            <p className="standard-text">
                                Behind the scenes, our team puts a lot of effort into
                                broadcast, creative design, and social media. As a
                                club, we want to create an environment where our staff
                                can have fun and develop their skills.
                            </p>
                            <StandardButton
                                title="View more"
                                color="grey"
                                link="/team"
                            />
                        </div>
                    </div>

                    <div className="about-col-section" ref={(el) => { sectionRefs.current[2] = el; }}>
                        <span className="about-col-number">03</span>
                        <h2 className="about-col-title">
                            THE{" "}
                            <span className="about-new-section-highlight">
                                COMMUNITY.
                            </span>
                        </h2>
                        <p className="standard-text">
                            Whether you want to grind matches or get involved
                            behind the scenes, AUEC has a place for you. Join us
                            and become part of Auckland&apos;s biggest university
                            gaming community.
                        </p>
                        <StandardButton
                            title="View more"
                            color="grey"
                            link="/events"
                        />
                    </div>
                </div>

                {/* Right: sticky video */}
                <div className="about-columns-right">
                    <video
                        ref={video2Ref}
                        className="about-col-video"
                        src="/auec-promotional-reel-about-page.mp4"
                        muted
                        loop
                        playsInline
                    />
                </div>
            </div>
        </main>
    );
}
