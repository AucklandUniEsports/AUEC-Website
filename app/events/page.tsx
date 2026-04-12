import { EventService } from "@/lib/service/EventService";
import EventClient from "../components/events/EventClient";

export default async function Events() {
    const response = await EventService.getEvents();
    const events = response;

    return (
        <section className="events">
            <div className="home-b-top">
                <h2 className="section-title">Explore Events</h2>
            </div>
            <EventClient events={events} />
        </section>
    );
}
