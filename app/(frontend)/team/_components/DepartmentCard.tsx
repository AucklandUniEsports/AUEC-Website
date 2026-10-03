import Image from "next/image";

export type Department = {
    name: string;
    description: string;
    memberCount: number;
    image: string;
};

type DepartmentCardProps = {
    department: Department;
    isActive: boolean;
    onSelect: () => void;
    zIndex: number;
};

export function DepartmentCard({
    department,
    isActive,
    onSelect,
    zIndex,
}: DepartmentCardProps) {
    const { name, description, memberCount, image } = department;

    return (
        <button
            type="button"
            onClick={onSelect}
            aria-expanded={isActive}
            aria-label={name}
            style={{ zIndex }}
            // Active card is 629px wide (Figma size); inactive strips are 360px.
            // The shadow gives each card some depth against its neighbours.
            className={`relative flex flex-col overflow-hidden text-left shrink-0 shadow-[0_0_40px_10px_rgba(0,0,0,0.85)] transition-[flex-basis] duration-500 ease-in-out ${
                isActive
                    ? "basis-[629px] cursor-default"
                    : "basis-[360px] cursor-pointer"
            }`}
        >
            <div className="relative flex-1 w-full">
                <Image
                    src={image}
                    alt=""
                    fill
                    sizes="629px"
                    className={`object-cover transition-[filter] duration-500 ${isActive ? "" : "grayscale"}`}
                />
            </div>

            {/* Purple bar and text panel only show on the selected card; unselected strips are photo only */}
            <div
                className={`shrink-0 overflow-hidden bg-[#272727] transition-[max-height,opacity] duration-500 ease-in-out ${
                    isActive ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="h-1.5 w-full bg-neon-purple" />

                {/* Fixed width so the text doesn't re-wrap while the card animates; the card clips it when narrow */}
                <div className="w-[629px] px-7 pt-6 pb-8">
                    <div className="flex justify-between items-start font-syne">
                        <h3 className="scale-y-80 font-medium text-white text-4xl uppercase tracking-wider">
                            {name}
                        </h3>
                        <span className="flex items-center gap-3 text-white text-2xl">
                            {memberCount}
                            <svg
                                viewBox="0 0 24 24"
                                className="size-6 text-neon-green"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-label="members"
                            >
                                <circle cx="9" cy="7" r="4" />
                                <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75M22 21v-2a4 4 0 0 0-3-3.85" />
                            </svg>
                        </span>
                    </div>
                    <p className="text-white text-2xl mt-4 max-w-[490px] leading-snug">
                        {description}
                    </p>
                </div>
            </div>
        </button>
    );
}
