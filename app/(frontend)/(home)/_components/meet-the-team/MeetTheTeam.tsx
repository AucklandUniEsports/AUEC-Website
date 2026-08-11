import StandardButton from "../../../_components/StandardButton";

export default function TeamSection() {
    return (
        <section className="home-d">
            <img className="home-d-bg" src="DSC00858.webp" alt="" />
            <div className="home-d-content">
                <h2 className="home-title">Meet the Team.</h2>
                <p className="standard-text">
                    The execs, game reps, broadcast crew and volunteers who keep
                    AUEC running. Built by students, for students. Meet the
                    people behind the matches.
                </p>
                <StandardButton
                    title="Learn More."
                    color="lime"
                    link="/about"
                />
            </div>
        </section>
    );
}
