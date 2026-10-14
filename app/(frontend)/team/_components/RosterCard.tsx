import Image from "next/image";
import type { Exec } from "../_data/team";

export function RosterCard({
    exec,
    stackedPosition,
}: {
    exec: Exec;
    stackedPosition: number;
}) {
    return (
        <article
            data-exec-card
            style={
                { "--stacked-position": stackedPosition } as React.CSSProperties
            }
            className={`group aspect-[3/5] p-px lg:hover:p-0.5 max-lg:data-spotlight:p-0.5 transition-[padding] duration-300 bg-linear-to-b from-[#222222] from-22% to-neon-purple to-76% order-(--stacked-position) lg:order-none
                w-[calc(50%-6px)] md:w-[calc(33.333%-11px)] lg:w-[calc(20%-13px)]`}
        >
            <div className="@container relative h-full w-full overflow-hidden bg-[#272727]">
                <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover grayscale transition duration-500 ease-out lg:group-hover:grayscale-0 lg:group-hover:scale-105 max-lg:group-data-spotlight:grayscale-0 max-lg:group-data-spotlight:scale-105 max-lg:motion-reduce:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-[8cqw] left-[7cqw] right-[5cqw]">
                    <p className="font-syne text-neon-green text-[clamp(10px,6cqw,12px)] uppercase tracking-[0.12em] whitespace-nowrap ">
                        {exec.role}
                    </p>
                    <div className="h-px w-10 bg-neon-purple my-1.5 transition-all duration-500 lg:group-hover:w-full max-lg:group-data-spotlight:w-full" />
                    <p className="font-syne text-white text-[clamp(12px,9.5cqw,20px)] uppercase leading-tight whitespace-nowrap scale-y-80">
                        {exec.name}
                    </p>
                </div>
            </div>
        </article>
    );
}
