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
                    <h1 className="text-[100px] text-white font-['Syne'] font-medium leading-0.8 tracking-[1.2px] uppercase text-cente font-bold">
                        Sponsors
                    </h1>
                    <p className="text-[18px] text-white font-['Syne'] font-medium leading-0.8 tracking-[1.2px] text-center max-w-xl">
                        Proud to be supported by blah blah lots of sponsors very
                        cool give us all your money, showcasing sponsors and
                        trying to get new sponsors from this page lol.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-12 mt-16 mx-32">
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

            <h1 className="text-[64px] text-white font-['Syne'] font-medium leading-0.8 tracking-[1.2px] uppercase grid place-items-center mt-16">
                Why work with us?
            </h1>
            <p className="text-[18px] text-white font-['Syne'] font-medium leading-0.8 tracking-[1.2px] text-center max-w-[36rem] mx-auto">
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
                    className="text-black bg-[#e2ff00] rounded py-2 px-6 mb-4 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed grid place-items-center w-full-[36rem]"
                    type="submit"
                >
                    Learn More
                </button>
            </a>

            <h1 className="text-[64px] text-white font-['Syne'] font-medium leading-0.8 tracking-[1.2px] uppercase grid place-items-center ">
                Our 2026 Community Partners
            </h1>

            <div className="grid grid-cols-4 gap-4 my-8 mx-16">
                <img src="/esports-arena.webp" className="partners-bg" />
                <img src="/game-on.webp" className="partners-bg" />
                <img src="/standing-fierce.webp" className="partners-bg" />
                <img src="/zowie.webp" className="partners-bg" />
            </div>
        </div>
    );
}
