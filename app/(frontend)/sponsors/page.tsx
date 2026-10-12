import SponsorCard from "./_components/SponsorCard";

const sponsors = [
    {
        link: "https://www.auckland.ac.nz/en/on-campus/facilities-and-services/sport-and-recreation/sport/EsportsArena.html",
        img: "/esports-arena.webp",
    },
    {
        link: "https://gameon.co.nz/",
        img: "/game-on.webp",
    },
    {
        link: "https://www.facebook.com/StandingFierce/",
        img: "/standing-fierce.webp",
    },
    {
        link: "https://zowie.benq.com/en-au/index.html",
        img: "/zowie.webp",
    },
];

const eventPhotos = [
    { src: "/DSC00276.webp", alt: "AUEC members at a tournament" },
    { src: "/DSC00032.webp", alt: "AUEC members socialising at an event" },
    { src: "/DSC07430.webp", alt: "AUEC members at a community night" },
];

export default function Sponsors() {
    return (
        <div className="flex flex-col gap-12">
            <section className="relative flex h-[320px] w-full flex-col items-center justify-center sm:h-[380px] lg:h-[458px]">
                <img
                    src="/purple_lawson.webp"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#4700ED]/75 to-black/75" />

                <div className="relative z-10 flex flex-col items-center gap-4 px-6">
                    <h1 className="text-center font-['Syne'] text-[32px] leading-[0.8] font-semibold tracking-[0.05em] text-white uppercase sm:text-[48px] md:text-[72px] lg:text-[96px]">
                        Sponsorships
                    </h1>

                    <p className="max-w-[542px] text-center font-['Syne'] text-[18px] leading-[1] font-normal tracking-[0.04em] text-white">
                        Be part of AUEC&apos;s 2026 journey. Sponsoring us puts
                        your brand in front of a diverse, engaged audience while
                        helping grow the next generation of New Zealand esports.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid w-full max-w-[1026px] grid-cols-1 gap-[21px] px-6 sm:grid-cols-2 lg:grid-cols-3">
                {eventPhotos.map((photo) => (
                    <img
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        className="aspect-9/5 w-full object-cover"
                    />
                ))}
            </section>

            <section className="flex flex-col items-center gap-4 px-6">
                <h2 className="text-center font-['Syne'] text-[32px] leading-[0.8] font-bold tracking-[0.05em] text-white uppercase md:text-[48px]">
                    Why work with us?
                </h2>

                <p className="max-w-[542px] text-center font-['Syne'] text-[18px] leading-[1] font-normal tracking-[0.04em] text-white">
                    Our events draw everyone from casual players to industry
                    professionals. Sponsors get brand exposure across our
                    broadcasts and socials, hands-on product placement at
                    events, and access to students from every faculty. 
                </p>

                <a
                    href="/AUEC-2026-Sponsorship-Deck.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex h-[40px] w-[161px] items-center justify-center rounded-[5px] bg-[#E2FF00] font-['Syne'] text-[20px] leading-[1] font-bold tracking-[-0.05em] text-black"
                >
                    Learn More
                </a>
            </section>

            <section className="flex flex-col items-center gap-8 px-6 pb-8">
                <h2 className="text-center font-['Syne'] text-[28px] leading-[0.8] font-bold tracking-[0.05em] text-white uppercase md:text-[40px]">
                    Our 2026 Community Partners
                </h2>

                <div className="grid w-full max-w-[1304px] grid-cols-1 gap-[29px] sm:grid-cols-2 lg:grid-cols-4">
                    {sponsors.map((sponsor) => (
                        <SponsorCard
                            key={sponsor.link}
                            link={sponsor.link}
                            img={sponsor.img}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
