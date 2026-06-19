"use client";
import Hero from "./Hero";
import FeaturedEvents from "./FeaturedEvents";
import About from "./About";
import Sponsors from "./Sponsors";

interface HomeClientProps {
    events: any[];
    sponsors: any[];
}

export default function HomeClient({ events, sponsors}: HomeClientProps) {
    return (
        <>
            <Hero />
            <FeaturedEvents events={events} />
            <div className="divider"></div>
            <About />
            <div className="divider"></div>
            <Sponsors sponsors={sponsors} />
        </>
    );
}
