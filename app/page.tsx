import HeroSection from "./components/home/Hero"
import FeaturedEventsSection from "./components/home/FeaturedEvents";
import AboutSection from "./components/home/About";
import SponsorsSection from "./components/home/Sponsors";

export default async function Home() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/home`,
        {
            cache: "no-store",
        },
    );
    const json = await response.json();
    const events = json.data;

    return (
        <>
            <HeroSection />
            <FeaturedEventsSection events={events} />
            <div className="divider"></div>
            <AboutSection />
            <div className="divider"></div>
            <SponsorsSection />
        </>
    );
}
