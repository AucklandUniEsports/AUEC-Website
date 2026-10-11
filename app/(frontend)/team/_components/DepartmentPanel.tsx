import Image from "next/image";
import { MemberList } from "./MemberList";
import type { Department } from "../_data/team";

export function DepartmentPanel({ department }: { department: Department }) {
    return (
        <div className="grid lg:grid-cols-2 xl:grid-cols-[2fr_3fr] gap-8 lg:gap-12 mt-10 transition-opacity duration-500 starting:opacity-0">
            <div className="self-start w-full aspect-[9/10] p-px bg-linear-to-b from-[#222222] from-22% to-neon-purple to-76%">
                <div className="relative h-full w-full overflow-hidden">
                    <Image
                        src={department.image}
                        alt={`The ${department.name} team`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover object-[50%_70%]"
                    />
                </div>
            </div>

            <div className="flex flex-col">
                <h3 className="font-syne text-white text-[40px] md:text-[56px] font-medium uppercase leading-[0.8] tracking-[1.2px] scale-y-75 origin-bottom-left">
                    {department.name}
                </h3>
                <p className="text-white/80 text-base md:text-lg leading-snug mt-4">
                    {department.description}
                </p>
                <MemberList members={department.members} />
            </div>
        </div>
    );
}
