import EventCard from "../components/EventCard";
import prisma from "@/lib/prisma";

export default async function Events(){
  const events = await prisma.event.findMany({
    include: {
      CategoriesOnEvents: {
        include: {
          Category: true,
        },
      },
      Location: true,
    },
  });
    return(
      <section className="events">
        <div className="home-b-top">
          <h2 className="section-title">Explore Events</h2>
        </div>
        <div className="events-wrapper">
          {
            events.map((event, index) =>(
              <EventCard event={event} key={index}/>
            ))
          }
        </div>
      </section>

    )
}