import { EventService } from "@/lib/service/EventService";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const allEvents = await EventService.getEvents();
        const featured = allEvents
            .sort(
                (a: any, b: any) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .slice(0, 3);

        return NextResponse.json(
            { message: "Fetched featured events", data: featured },
            { status: 200 },
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch featured events" },
            { status: 500 },
        );
    }
}
