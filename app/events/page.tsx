"use client";
import { useEffect, useState } from "react";
import EventClient from "../components/events/EventClient";

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, []);

    return (
        <section className="events">
            <div className="home-b-top">
                <h2 className="section-title">Explore Events</h2>
            </div>
            <EventClient events={events} />
        </section>
    );
}
