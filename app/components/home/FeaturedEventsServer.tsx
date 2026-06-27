import FeaturedEvents from "./FeaturedEvents";

export default async function FeaturedEventsServer() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/featured`,
        { cache: "no-store" },
    );

    const events = (await res.json()).data ?? [];

    return <FeaturedEvents events={events} />;
}
