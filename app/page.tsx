import HomeClient from "./components/home/HomeClient";

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
    const sponsors = (await sponsorsRes.json()).data;

    return <HomeClient events={events} sponsors={sponsors} />;
}
