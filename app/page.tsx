import { Suspense } from "react";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import FeaturedEventsServer from "./components/home/FeaturedEventsServer";
import SponsorsServer from "./components/home/SponsorsServer";

function FeaturedEventsFallback() {
    return (
        <section className="home-b">
            <div className="home-b-top">
                <h2 className="section-title">Featured Events</h2>
            </div>
            <div className="events-wrapper">
                <p className="placeholder-text">Loading events…</p>
            </div>
        </section>
    );
}

function SponsorsFallback() {
    return (
        <section className="home-b">
            <div className="home-b-top">
                <h2 className="section-title">Community Partners</h2>
            </div>
            <div className="sponsor-wrapper">
                <p className="placeholder-text">Loading partners…</p>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Hero />
            <Suspense fallback={<FeaturedEventsFallback />}>
                <FeaturedEventsServer />
            </Suspense>
            <div className="divider"></div>
            <About />
            <div className="divider"></div>
            <Suspense fallback={<SponsorsFallback />}>
                <SponsorsServer />
            </Suspense>
        </>
    );
}
