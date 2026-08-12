import SponsorCard from "../components/SponsorCard";

const sponsors = [
    {
        link: "https://www.auckland.ac.nz/en/on-campus/facilities-and-services/sport-and-recreation/sport/EsportsArena.html",
        img: "esports-arena.webp",
    },
    {
        link: "https://gameon.co.nz/",
        img: "game-on.webp",
    },
    {
        link: "https://www.facebook.com/StandingFierce/",
        img: "standing-fierce.webp",
    },
    {
        link: "https://zowie.benq.com/en-au/index.html",
        img: "zowie.webp",
    },
];

export default function Sponsors() {
    return (
        <div>
            <div className="relative w-full h-140 flex flex-col items-center justify-center">
                <img
                    src="/purple_lawson.png"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-[#4700ED] opacity-75" />
                <div className="relative mt-24 z-10 flex flex-col items-center">
                    <h1 className="text-[32px] sm:text-[48px] md:text-[72px] lg:text-[96px] text-white font-['Syne'] font-bold tracking-widest sm:tracking-[0.15em] uppercase text-center mx-6 sm:mx-8 md:mx-12 lg:mx-16">
                        Sponsorships
                    </h1>
                    <p className="text-[18px] text-white font-['Syne'] font-medium leading-0.8 tracking-[1.2px] text-center max-w-xl">
                        Proud to be supported by blah blah lots of sponsors very
                        cool give us all your money, showcasing sponsors and
                        trying to get new sponsors from this page lol.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:mt-16 mx-8 sm:mx-12 md:mx-20 lg:mx-32">
                <img
                    src="/DSC00276.webp"
                    alt="Event Picture 1"
                    className="w-full aspect-9/5 object-cover"
                />
                <img
                    src="/DSC00032.webp"
                    alt="Event Picture 2"
                    className="w-full aspect-9/5 object-cover"
                />
                <img
                    src="/DSC07430.webp"
                    alt="Event Picture 3"
                    className="w-full aspect-9/5 object-cover"
                />
            </div>

            <h1 className="text-[32px] md:text-[64px] text-white font-['Syne'] font-medium leading-[0.8] tracking-[0.15em] uppercase text-center mt-16 mx-4 md:mx-16">
                Why work with us?
            </h1>

            <p className="text-[18px] text-white font-['Syne'] font-medium leading-0.8 tracking-[1.2px] text-center max-w-[36rem] mx-auto mt-4 font-stretched-extra-expanded">
                Proud to be supported by blah blah lots of sponsors very cool
                give us all your money, showcasing sponsors and trying to get
                new sponsors from this page lol.
            </p>
            <a
                href="/AUEC-2026-Sponsorship-Deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center mt-8"
            >
                <button
                    className="text-[18px] text-black bg-[#e2ff00] rounded py-4 px-8 mb-4 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed grid place-items-center w-full-[36rem]"
                    type="submit"
                >
                    Learn More
                </button>
            </a>

            <h1 className="text-[32px] md:text-[64px] text-white font-['Syne'] font-medium leading-[0.8] tracking-[0.15em] uppercase text-center mx-4 mt-16 md:mx-16">
                Our 2026 Community Partners
            </h1>

            <div className="sponsor-wrapper my-8 mx-4 md:mx-16">
                {sponsors.map((sponsor, index) => (
                    <SponsorCard
                        key={index}
                        link={sponsor.link}
                        img={sponsor.img}
                    />
                ))}
            </div>
        </div>
    );
}
