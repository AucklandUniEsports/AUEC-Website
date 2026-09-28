type FooterLinkProps = {
    title: string
    link: string
}

export default function FooterLink({title, link} : FooterLinkProps){
    return (
        <li>
            <a
                className="text-white text-base font-medium leading-none tracking-[-1px]"
                href={link}
                target="_blank"
            >
                {title}
            </a>
        </li>
    );
}