import prisma from "@/lib/prisma";

export class SponsorService {
    static async getSponsors() {
        return await prisma.sponsor.findMany({
            include: {
                SponsorTier: true,
            },
        });
    }
}
