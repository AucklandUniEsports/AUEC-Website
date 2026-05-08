import HomeClient from "./_components/home/HomeClient";

export default async function Home() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/events/featured`,
        {
            cache: "no-store",
        },
    );
    const json = await response.json();
    const events = json.data;

    return <HomeClient events={events} />;
}
