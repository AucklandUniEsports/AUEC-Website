import Image from "next/image";
import SponsorCard from "../../../_components/SponsorCard";
import StandardButton from "../../../_components/StandardButton";
import Link from "next/link";

interface Sponsor {
    id: number;
    name: string;
    link: string;
    thumbnailPath: string;
}

export default function SponsorsSection({ sponsors }: { sponsors: Sponsor[] }) {
    return (
        <section className="flex flex-col gap-6 px-8 pt-8 pb-12 min-[950px]:px-16">
            <div className="flex items-center justify-between">
                <h2 className="section-title">Community Partners</h2>
                <Link
                    href="/sponsors"
                    className="button-standard button-grey hidden min-[950px]:block"
                >
                    View All Sponsors.
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 min-[950px]:grid-cols-4">
                {sponsors.map((sponsor) => (
                    <SponsorCard
                        link={sponsor.link}
                        img={sponsor.thumbnailPath}
                        key={sponsor.id}
                    />
                ))}
            </div>

            <Link
                href="/sponsors"
                className="button-standard button-grey block min-[950px]:hidden"
            >
                View All Sponsors.
            </Link>

            <div
                className="mt-8 flex flex-col p-1 items-center justify-center gap-3 overflow-hidden 
            rounded-[15px] border border-[#9C72FF]/50 bg-[#141414] bg-[linear-gradient(to_top,#4700ED33_-21%,#1A1A1A33_29%)] 
            px-3 py-3.75 text-center min-[950px]:flex-row min-[950px]:gap-5 min-[950px]:text-left"
            >
                <Image
                    src="/sponsors-ico.svg"
                    alt=""
                    width={131}
                    height={133}
                    className="h-auto w-14 shrink-0 min-[950px]:-mb-3.75 min-[950px]:h-30.25 min-[950px]:w-auto min-[950px]:self-end"
                />
                <div className="flex flex-col gap-2">
                    <h3 className="font-['Syne']! text-2xl leading-[90%] font-medium tracking-[1.2px] text-white min-[950px]:text-[40px]">
                        Interested in a sponsorship?
                    </h3>
                    <p className="font-[Switzer] text-[13px] text-[#a0a0a0] min-[950px]:text-base">
                        Let&apos;s explore what AUEC can do for your
                        organization.
                    </p>
                </div>
                <StandardButton
                    title="About Sponsorships"
                    color="lime"
                    link="/AUEC 2026 Sponsorship Deck.pdf"
                />
            </div>
        </section>
    );
}
