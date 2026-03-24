import prisma from "@/lib/prisma";
import SearchBar from "../components/events/SearchBar";

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
            <div className="searchbar-wrapper">
                <SearchBar events={events} />
            </div>
        </section>
    );
}
