import HeroSection from "./_components/home/Hero";
import FeaturedEventsSection from "./_components/home/FeaturedEvents";
import AboutSection from "./_components/home/About";
import SponsorsSection from "./_components/home/Sponsors";
import HomeClient from "./_components/home/HomeClient";

export default async function Home() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/featured`,
        {
            cache: "no-store",
        },
    );
    const json = await response.json();
    const events = json.data;

    return <HomeClient events={events} />;
    // (
    //     <>
    //         <HeroSection />
    //         <FeaturedEventsSection events={events} />
    //         <div className="divider"></div>
    //         <AboutSection />
    //         <div className="divider"></div>
    //         <SponsorsSection />
    //     </>
        
    // );
}
