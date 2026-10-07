import PageHero from "../_components/PageHero";
import EventClient from "./_components/EventClient";

export default async function Events() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`,
        {
            cache: "no-store",
        },
    );
    const json = await response.json();
    const events = json.data;

    return (
        <>
            <PageHero
                title="Events."
                subtitle="AUEC hosts tournaments, social nights, and collaborations with other clubs throughout the semester. Browse what's coming up and see what we've been up to."
                backgroundImage="/auec-banner.webp"
            />
            <section className="events pt-12! max-[950px]:pt-12!">
                <div className="home-b-top">
                    <h2 className="section-title">Explore Events</h2>
                </div>
                <EventClient events={events} />
            </section>
        </>
    );
}
