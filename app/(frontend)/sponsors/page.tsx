import PageHero from "../_components/PageHero";
import PhotoSlider from "../_components/PhotoSlider";
import SponsorCard from "../_components/SponsorCard";
import { eventPhotos } from "./photos";
import Link from "next/link";

interface Sponsor {
    id: number;
    name: string;
    link: string;
    thumbnailPath: string;
}

export default async function Sponsors() {
    const sponsorsRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/sponsor`,
        { cache: "no-store" },
    );
    const sponsors: Sponsor[] = (await sponsorsRes.json()).data ?? [];

    return (
        <div className="flex flex-col gap-24 pb-24 max-[950px]:gap-16 max-[950px]:pb-16">
            <PageHero
                title="Sponsorships."
                subtitle="Be part of AUEC's 2026 journey. Sponsoring us puts your brand in front of a diverse, engaged audience while helping grow the next generation of New Zealand esports."
                backgroundImage="/purple_lawson.webp"
            />

            <section className="-mt-16 max-[950px]:-mt-8">
                <PhotoSlider
                    photos={eventPhotos}
                    className="h-[30vh] md:h-[45vh]"
                />
            </section>

            <section className="flex flex-col items-center gap-8 px-16 text-center max-[950px]:px-8">
                <h2 className="font-syne text-[clamp(32px,3.5vw,64px)] leading-[1.1] scale-y-80 font-bold tracking-wider text-white uppercase">
                    Why work with us?
                </h2>

                <p className="font-syne max-w-190 text-[clamp(16px,1.2vw,20px)] leading-[1.6] font-normal text-white/85">
                    Our events draw everyone from casual players to industry
                    professionals. Sponsors get brand exposure across our
                    broadcasts and socials, hands-on product placement at
                    events, and access to students from every faculty. That
                    makes us a strong recruiting channel as well as an
                    advertising one.
                </p>

                <Link
                    href="/AUEC-2026-Sponsorship-Deck.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neon-green font-syne flex h-11 w-42.75 items-center justify-center rounded-[5px] text-[20px] leading-none font-bold tracking-tighter text-black"
                >
                    Learn More
                </Link>
            </section>

            <section className="flex flex-col items-center gap-10 px-16 max-[950px]:px-8">
                <h2 className="font-syne text-center text-[clamp(28px,3vw,52px)] leading-[1.1] font-medium tracking-wider text-white uppercase">
                    Our 2026 Community Partners
                </h2>

                <div className="sponsor-wrapper w-full">
                    {sponsors.map((sponsor) => (
                        <SponsorCard
                            key={sponsor.id}
                            link={sponsor.link}
                            img={sponsor.thumbnailPath}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
