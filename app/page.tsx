import EventCard from "./components/EventCard";
import StandardButton from "./components/StandardButton";
import prisma from "@/lib/prisma";
import SponsorCard from "./components/SponsorCard";

const sponsors = [
  {
    link:"https://www.facebook.com/StandingFierce/",
    img:"standing_fierce.png"
  },
  {
    link:"https://zowie.benq.com/en-au/index.html",
    img:"zowie.svg"
  },
  {
    link:"https://gameon.co.nz/",
    img:"game_on.png"
  }

]

export default async function Home() {
  const events = await prisma.event.findMany({
    include: {
      CategoriesOnEvents: {
        include: {
          Category: true,
        },
      },
      Location: true,
    },
    take: -3,
  });
  return (
    <>
      <section className="home-a atf-section">
        <div className="home-a-content">
          <h1 className="home-a-title">For The Love <br /> of The Game.</h1>
          <p className="standard-text">Auckland University Esports Club (AUEC) is New Zealand's biggest student e-sports organization, empowering players to compete and enjoy gaming with their peers.</p>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform?usp=header"  target="_blank" className="button-standard button-lime">
            Sign up to AUEC.
        </a>
      </section>
      <section className="home-b">
        <div className="home-b-top">
          <h2 className="section-title">Featured Events</h2>
          <StandardButton  title="Explore Events." color="grey" link="/events"/>
        </div>
        <div className="events-wrapper">
          {
            events.map((event, index) =>(
              <EventCard event={event} key={index}/>
            ))
          }
        </div>
      </section>
      <div className="divider"></div>
      <section className="home-c">
          <div className="home-c-img-wrapper-outer">
            <div className="home-c-img-wrapper-left"><img className="home-c-img" src="DSC00032.JPG" alt="" /></div>
            <div className="home-c-img-wrapper-right">
              <img className="home-c-img" src="DSC07430.JPG" alt="" />
              <img className="home-c-img" src="DSC00276.JPG" alt="" />
            </div>
          </div>
          <h2 className="home-c-title">Meet the Esports Club.</h2>
          <p className="standard-text">
            From fighting game locals to interclub tournaments, our team runs a bunch of events for the community and puts a lot of work into our broadcasts for the folks at home. Whether you want to grind matches or get involved behind the scenes, AUEC has a place for you.
          </p>
          <StandardButton  title="Learn More." color="grey" link="/about"/>
      </section>
      <div className="divider"></div>
      <section className="home-b">
        <div className="home-b-top">
          <h2 className="section-title">Community Partners</h2>
          <a href="AUEC 2026 Sponsorship Deck.pdf" target="_blank" className="button-standard button-grey">
            About Sponsorships.
          </a>
        </div>
        <div className="sponsor-wrapper">
        {
          sponsors.map((sponsor,index) => (
            <SponsorCard link={sponsor.link} img={sponsor.img} key={index}/>
          ))
          
        }
        </div>
      </section>
    </>
  );
}
