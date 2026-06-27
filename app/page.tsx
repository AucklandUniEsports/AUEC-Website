import { Suspense } from "react";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import StandardButton from "./components/StandardButton";
import FeaturedEventsServer from "./components/home/FeaturedEventsServer";
import SponsorsServer from "./components/home/SponsorsServer";

// Rendered per-request: the page self-fetches its own API routes, which aren't
// reachable during `next build`, so it can't be statically prerendered. The
// fetches still use the Data Cache (revalidate: 60), so repeated requests are
// served from cache rather than hitting the DB every time.
export const dynamic = "force-dynamic";

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
            <section className="home-b">
                <div className="home-b-top">
                    <h2 className="section-title">Featured Events</h2>
                    <StandardButton
                        title="Explore Events."
                        color="grey"
                        link="/events"
                    />
                </div>
                <div className="events-wrapper">
                    <Suspense
                        fallback={
                            <p className="placeholder-text">Loading events…</p>
                        }
                    >
                        <FeaturedEventsServer />
                    </Suspense>
                </div>
            </section>
            <div className="divider"></div>
            <About />
            <div className="divider"></div>
            <Suspense fallback={<SponsorsFallback />}>
                <SponsorsServer />
            </Suspense>
        </>
    );
}
