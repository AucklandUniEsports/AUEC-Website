// Stephen write the event api route in here
import { getEvents } from "@/lib/service/EventService";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured") === "true";

    const events = await getEvents(featured);
    return Response.json(events);
}
