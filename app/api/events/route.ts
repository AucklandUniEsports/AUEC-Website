import { EventService } from "@/lib/service/EventService";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        const events = await EventService.getEvents();
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
