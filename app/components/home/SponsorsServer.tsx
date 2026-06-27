import Sponsors from "./Sponsors";

export default async function SponsorsServer() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sponsor`, {
        next: { revalidate: 60 },
    });

    const sponsors = (await res.json()).data ?? [];

    return <Sponsors sponsors={sponsors} />;
}
