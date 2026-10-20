type FooterLinkProps = {
    title: string;
    link: string;
    className?: string;
};

export default function FooterLink({
    title,
    link,
    className = "text-sm lg:text-base leading-tight",
}: FooterLinkProps) {
    return (
        <li>
            <a
                className={`relative tracking-[1px] text-white ${className}
             after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out
             hover:after:scale-x-100 focus-visible:after:scale-x-100`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {title}
            </a>
        </li>
    );
}
