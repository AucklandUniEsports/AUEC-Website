import StandardButton from "../components/StandardButton";

const games = [
    {
        name:"Brawlhalla"
    },
    {
        name:"Counter-Strike 2"
    },
    {
        name:"League of Legends"
    },
    {
        name:"Overwatch 2"
    },
    {
        name:"Teamfight Tactics"
    },
    {
        name:"Tekken 8"
    },

]
export default function About() {
  return (
    <>
      <section className="about">
        <div className="about-top">
            <h1 className="home-title">About AUEC.</h1>
            <p className="standard-text">The Auckland University Esports Club is a student association operated by students studying at the University of Auckland, aiming to cultivate a thriving community of people with a passion for gaming and competition.</p>
        </div>
        <div className="about-bottom">
            <div className="about-bottom-section">
                <img className="about-img" src="DSC01071.webp" alt="" />
                <p className="standard-text">Our team at AUEC is focused on providing a platform where everyone can enjoy gaming to their heart's content. We are dedicated to providing quality events and opportunities for talent to compete in.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform?usp=header"  target="_blank" className="button-standard button-lime">
                    Sign up to AUEC.
                </a>
            </div>
            <div className="about-bottom-section">
                <img className="about-img" src="DSC05901.webp" alt="" />
                <p className="standard-text">Behind the scenes, our team puts a lot of effort into broadcast, creative design, and social media. As a club, we want to create an environment where our staff can have fun and develop their skills.</p>
                <StandardButton title="Join the Team." color="grey" link="/about"/>
            </div>
        </div>
      </section>
    </>
  );
}
