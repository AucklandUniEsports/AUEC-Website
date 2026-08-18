import StandardButton from "../../../_components/StandardButton";

export default function AboutSection() {
    return (
        <section className="home-c">
            <div className="home-c-img-wrapper-outer">
                <div className="home-c-img-wrapper-left">
                    <img
                        className="home-c-img-left"
                        src="DSC00276.webp"
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
                        src="DSC00032.webp"
                        alt=""
                    />
                </div>
            </div>
            <h2 className="text-white font-['Syne'] text-[100px] scale-y-60 font-medium not-italic leading-[0.8] tracking-[1.2px] uppercase -mt-24 text-5xl">
                MEET THE <br /> ESPORTS CLUB.
            </h2>
            <p className="text-white font-['Syne'] text-[22px] font-normal not-italic leading-[1.0] tracking-[0.2px] opacity-80 max-w-[60%] -mt-2 mb-3">
                From fighting game locals to interclub tournaments, our team
                runs a bunch of events for the community and puts a lot of work
                into our broadcasts for the folks at home. Whether you want to
                grind matches or get involved behind the scenes, AUEC has a
                place for you.
            </p>
            <StandardButton title="Find Out More." color="lime" link="/about" />
        </section>
    );
}
