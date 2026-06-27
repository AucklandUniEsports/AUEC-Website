import FeaturedEvents from "./FeaturedEvents";

export default async function FeaturedEventsServer() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/featured`,
        { next: { revalidate: 60 } },
    );

    const events = (await res.json()).data ?? [];

    return <FeaturedEvents events={events} />;
}
