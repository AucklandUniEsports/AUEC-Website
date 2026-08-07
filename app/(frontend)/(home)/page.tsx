import Hero from "@/app/(frontend)/(home)/_components/Hero";
import FeaturedEvents from "@/app/(frontend)/(home)/_components/FeaturedEvents";
import About from "@/app/(frontend)/(home)/_components/About";
import Sponsors from "@/app/(frontend)/(home)/_components/Sponsors";

export default async function Home() {
    const [eventsRes, sponsorsRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/featured`, {
            cache: "no-store",
        }),
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sponsor`, {
            cache: "no-store",
        }),
    ]);

    const events = (await eventsRes.json()).data;
    const sponsors = (await sponsorsRes.json()).data ?? [];

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
