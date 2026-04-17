import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
    return (
        <section className="about">
            <div className="about-top">
                <h1 className="home-title">Contact</h1>
                <p className="standard-text">
                    The Auckland University Esports Club is a student
                    association operated by students studying at the University
                    of Auckland, aiming to cultivate a thriving community of
                    people with a passion for gaming and competition.
                </p>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-section">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
