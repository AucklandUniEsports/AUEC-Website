import EventCard from "./components/EventCard";
import StandardButton from "./components/StandardButton";

export default function Home() {
  return (
    <>
      <section className="home-a">
        <h1>For The Love of The Game.</h1>
        <p>Auckland University Esports Club (AUEC) is New Zealand's biggest student e-sports organization, empowering players to compete and enjoy gaming alongside their peers.</p>
        <StandardButton title="Sign up to AUEC." color="lime" link="test" />
      </section>
      <section className="home-b">
        <h2 className="section-title">Upcoming Events</h2>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </section>
    </>
  );
}
