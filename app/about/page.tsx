
import AboutSection from "../components/AboutSection";

export default function About() {
  return (
    <section className="about">

      <div className="about-top">
        <h1 className="home-title">About AUEC.</h1>
        <p className="standard-text">
          The Auckland University Esports Club is a student association
          operated by students studying at the University of Auckland,
          aiming to cultivate a thriving community of people with a
          passion for gaming and competition.
        </p>
      </div>

      <div className="about-bottom">

        <AboutSection
          image="DSC01071.webp"
          text="Our team at AUEC is focused on providing a platform where everyone can enjoy gaming to their heart's content. We are dedicated to providing quality events and opportunities for talent to compete in."
          buttonTitle="Sign up to AUEC."
          buttonColor="lime"
          buttonLink="https://docs.google.com/forms/d/e/1FAIpQLScOvsq5IQ-yDr0wx3xYN3ZNJkCz1mP4Kw8NZl6XQ_HSc8rswg/viewform?usp=header"
        />

        <AboutSection
          image="DSC05901.webp"
          text="Behind the scenes, our team puts a lot of effort into broadcast, creative design, and social media. As a club, we want to create an environment where our staff can have fun and develop their skills."
          buttonTitle="Join the Team."
          buttonColor="grey"
          buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdH6UNDa-znBkfG59CON4PfIQDlxYsTX-M7f-j0BDnYhT4RMQ/viewform"
        />

      </div>

    </section>
  );
}
