import StandardButton from "../../../_components/StandardButton";

export default function AboutSection() {
    return (
        <section className="flex flex-col pt-8 pb-12 gap-4">
            <div className="flex gap-4 object-cover h-[50vh] w-full">
                <div className="w-[55%]">
                    <img
                        className="object-cover h-full w-full"
                        src="DSC00276.webp"
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-4 w-[45%]">
                    <img
                        className="object-cover h-1/2 w-full"
                        src="DSC00032.webp"
                        alt=""
                    />
                    <img
                        className="object-cover h-1/2 w-full"
                        src="DSC07430.webp"
                        alt=""
                    />
                </div>
            </div>
            <div className="pl-16 flex flex-col gap-4 -mt-24">
                <h2 className="text-white font-['Syne'] text-[100px] scale-y-70 font-medium not-italic leading-[0.8] tracking-[1.2px] uppercase text-5xl">
                    MEET THE ESPORTS <br /> CLUB.
                </h2>
                <p className="text-white font-['Syne'] text-[22px] font-normal not-italic leading-[1.0] tracking-[0.2px] opacity-80 max-w-[60%] mb-5">
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
