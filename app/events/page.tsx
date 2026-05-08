import EventClient from "../_components/events/EventClient";

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
        <section className="events">
            <div className="home-b-top">
                <h2 className="section-title">Explore Events</h2>
            </div>
            <EventClient events={events} />
        </section>
    );
}
