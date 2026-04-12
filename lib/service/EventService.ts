import prisma from "@/lib/prisma";

export class EventService {
    static async getEvents() {
        return await prisma.event.findMany({
            include: {
                CategoriesOnEvents: {
                    include: {
                        Category: true,
                    },
                },
                Location: true,
            },
        });
    }
}
