import Image from "next/image";

export function TeamHero() {
    return (
        <div className="relative">
            <Image
                src="/TeamPage/Banner.webp"
                alt="Team Banner"
                width={4096}
                height={1379}
                className="w-full h-auto border-b border-gray-400"
            />

            <div className="absolute bottom-0 pl-9 pb-8 tracking-wider">
                <h2 className="font-syne text-neon-green font-medium text-3xl uppercase">
                    AUEC .2026
                </h2>
                <h1 className="font-syne text-white text-7xl font-bold uppercase scale-y-80">
                    Meet the Team.
                </h1>
            </div>
        </div>
    );
}
