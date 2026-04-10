// Stephen write the event api route in here
import { EventService } from "@/lib/service/EventService";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured") === "true";

    try {
        const events = await EventService.getEvents(featured);
        return NextResponse.json(
            { message: "Fetched all events", data: events },
            { status: 200 },
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch events" },
            { status: 500 },
        );
    }
}
