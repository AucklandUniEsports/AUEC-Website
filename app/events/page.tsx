import prisma from "@/lib/prisma";
import EventClient from "../components/events/EventClient";

export default async function Events() {
    const events = await prisma.event.findMany({
        include: {
            CategoriesOnEvents: {
                include: {
                    Category: true,
                },
            },
            Location: true,
        },
    });
    return (
        <section className="events">
            <div className="home-b-top">
                <h2 className="section-title">Explore Events</h2>
            </div>
            <div className="client-wrapper">
                <EventClient events={events} />
            </div>
        </section>
    );
}
