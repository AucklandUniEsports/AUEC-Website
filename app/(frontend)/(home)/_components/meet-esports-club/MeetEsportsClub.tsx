import StandardButton from "../../../_components/StandardButton";
import PhotoSlider from "./PhotoSlider";
import { photos } from "./photos";

export default function AboutSection() {
    return (
        <section className="flex flex-col px-7 md:px-0 pt-8 pb-24 md:pb-36 gap-4 bg-linear-to-b from-transparent from-75% to-dark-purple/6">
            <div className="relative -mx-7 md:mx-0">
                <PhotoSlider
                    photos={photos}
                    className="h-[30vh] md:h-[45vh] lg:h-[65vh] md:brightness-75"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] to-transparent to-50%" />
            </div>
            <div className="@container relative pl-3 md:pl-5 lg:pl-16 flex flex-col gap-4 -mt-10 md:-mt-24">
                <h2 className="text-white font-syne text-[9.3cqw] scale-y-80 md:text-[min(72px,7cqw)] font-normal md:font-medium not-italic leading-[0.9] md:leading-[0.8] tracking-[1.2px] uppercase">
                    MEET THE ESPORTS CLUB.
                </h2>
                <p className="text-white font-syne text-[15px] md:text-[22px] font-normal not-italic leading-none tracking-[0.2px] opacity-80 md:max-w-[60%] mb-5">
                    From fighting game locals to interclub tournaments, our team
                    runs a bunch of events for the community and puts a lot of
                    work into our broadcasts for the folks at home. Whether you
                    want to grind matches or get involved behind the scenes,
                    AUEC has a place for you.
                </p>
                <StandardButton
                    title="Find Out More."
                    color="lime"
                    link="/about"
                />
            </div>
        </section>
    );
}
