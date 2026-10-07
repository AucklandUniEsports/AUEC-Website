import Image from "next/image";

type Exec = {
    name: string;
    role: string;
    image: string;
};

export function ExecCards({ name, role, image }: Exec) {
    return (
        <div className="@container relative w-[clamp(140px,15vw,300px)] aspect-[224/497] -skew-x-10 rounded-2xl overflow-hidden">
            <div className="absolute inset-y-0 -inset-x-[20%] skew-x-10">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 2000px) 34vw, 700px"
                    className="object-cover grayscale scale-160 translate-x-[7%] translate-y-[8%]"
                />
            </div>

            <div className="absolute left-0 top-[17%] h-[62%] w-[21%] flex items-center justify-center bg-[#161616] rounded-r-xl">
                <p className="font-syne scale-x-80 text-white text-3xl uppercase tracking-wider whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                    {name}
                </p>
            </div>

            <div className="absolute right-0 bottom-0 h-[40%] w-[21%] flex items-center justify-center bg-white rounded-tl-xl">
                <p className="font-syne scale-x-80 text-black text-2xl uppercase tracking-wider whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                    {role}
                </p>
            </div>
        </div>
    );
}
