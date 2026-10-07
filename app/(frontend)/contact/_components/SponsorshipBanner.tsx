import Image from "next/image";

export default function SponsorshipBanner() {
    return (
        <section className="relative overflow-hidden rounded-2xl border border-[#272727] bg-linear-to-b from-[#141414] to-[#1c1631] px-6 py-8 lg:py-9">
            <div className="flex flex-col items-start gap-6 lg:grid lg:grid-cols-[1fr_auto_auto_1fr] lg:items-center lg:gap-0">
                <div className="lg:relative lg:mr-7 lg:w-31.5 lg:self-stretch lg:justify-self-end xl:w-38.75">
                    <Image
                        className="h-14 w-auto lg:absolute lg:right-0 lg:-bottom-9 lg:h-32 xl:h-39.25"
                        src="/star_emblem.svg"
                        alt=""
                        width={131}
                        height={133}
                    />
                </div>

                <div className="flex max-w-md flex-col gap-3 lg:mr-12">
                    <h2 className="font-['Syne']! text-[32px] leading-[0.8] font-medium tracking-[1.2px] text-white sm:text-[40px]">
                        Interested in a sponsorship?
                    </h2>
                    <p className="text-lg font-medium tracking-[-0.7px] text-[#888888]">
                        Let&apos;s explore what AUEC can do for your
                        organization.
                    </p>
                </div>

                <a
                    className="rounded-[5px] bg-[#e2ff00] px-8 py-1 text-lg font-medium tracking-[-0.7px] whitespace-nowrap text-black"
                    href="/AUEC 2026 Sponsorship Deck.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    About Sponsorships
                </a>
            </div>
        </section>
    );
}
