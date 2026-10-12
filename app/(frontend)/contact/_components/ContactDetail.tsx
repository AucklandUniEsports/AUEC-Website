type ContactDetailProps = {
    label: string;
    value: string;
    link: string;
};

export default function ContactDetail({ label, value, link }: ContactDetailProps) {
    const isExternal = link.startsWith("http");

    return (
        <a
            className="group flex items-center justify-between gap-4 rounded-[5px] bg-[#272727] p-6 transition-colors hover:bg-[#2f2f2f]"
            href={link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
        >
            <div className="flex min-w-0 flex-col gap-2">
                <p className="text-sm uppercase tracking-[1.2px] text-[#aaaaaa]">
                    {label}
                </p>
                <p className="text-xl font-medium tracking-[-0.7px] break-words text-white">
                    {value}
                </p>
            </div>
            <svg
                className="size-6 shrink-0 text-[#6b6b6b] transition-colors group-hover:text-[#e2ff00]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
            >
                <path d="M7 17 17 7M8 7h9v9" />
            </svg>
        </a>
    );
}
