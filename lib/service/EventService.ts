//  Stephen put the db query in here
//  This is where the CRUD logic for events will go
//  This will be used by the API route in app/api/events/route.ts
import prisma from "@/lib/prisma";

export async function getEvents(featured?: boolean) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return await prisma.event.findMany({
        where: featured
            ? {
                  date: {
                      gte: today,
                  },
              }
            : {},
        orderBy: featured
            ? {
                  date: "asc",
              }
            : undefined,
        take: featured ? 3 : undefined,
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
