import StandardButton from "../StandardButton";

export default function AboutSection() {
    return (
        <section className="home-c">
            <div className="home-c-img-wrapper-outer">
                <div className="home-c-img-wrapper-left">
                    <img
                        className="home-c-img-left"
                        src="DSC00032.webp"
                        alt=""
                    />
                </div>
                <div className="home-c-img-wrapper-right">
                    <img
                        className="home-c-img-right"
                        src="DSC07430.webp"
                        alt=""
                    />
                    <img
                        className="home-c-img-right"
                        src="DSC00276.webp"
                        alt=""
                    />
                </div>
            </div>
            <h2 className="home-title">
                Meet the <br /> Esports Club.
            </h2>
            <p className="standard-text">
                From fighting game locals to interclub tournaments, our team
                runs a bunch of events for the community and puts a lot of work
                into our broadcasts for the folks at home. Whether you want to
                grind matches or get involved behind the scenes, AUEC has a
                place for you.
            </p>
            <StandardButton title="Learn More." color="grey" link="/about" />
        </section>
    );
}
