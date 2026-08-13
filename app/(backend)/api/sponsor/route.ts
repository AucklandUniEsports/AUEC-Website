import { SponsorService } from "@/lib/service/SponsorService";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const sponsors = await SponsorService.getSponsors();
        return NextResponse.json(
            { message: "Fetched all sponsors", data: sponsors },
            { status: 200 },
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to fetch sponsors" },
            { status: 500 },
        );
    }
}
