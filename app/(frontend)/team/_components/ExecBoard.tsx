import { ExecCards } from "./ExecCards";

export function ExecBoard() {
    const execs = [
        {
            name: "Matthew Shing",
            role: "Marketing",
            image: "/TeamPage/execs/1.webp",
        },
        {
            name: "Leon Huang",
            role: "Vice President",
            image: "/TeamPage/execs/2.webp",
        },
        {
            name: "Justin Tu",
            role: "President",
            image: "/TeamPage/execs/3.webp",
        },
        {
            name: "Martin Young",
            role: "Treasurer",
            image: "/TeamPage/execs/4.webp",
        },
        {
            name: "Tabitha Hughes",
            role: "Secretary",
            image: "/TeamPage/execs/5.webp",
        },
    ];
    return (
        <div className="border-b border-gray-400 w-full">
            <div className="flex flex-col gap-12 w-fit max-w-full mx-auto pt-28 pb-20">
                <div className="font-syne uppercase tracking-wider scale-y-80 -ml-[calc(clamp(140px,15vw,224px)*0.195)]">
                    <h2 className="text-neon-green text-xl ">The Board</h2>
                    <h1 className="text-white text-5xl">Executives.</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-x-8">
                    {execs.map((exec, i) => (
                        <ExecCards key={i} {...exec} />
                    ))}
                </div>
            </div>
        </div>
    );
}
