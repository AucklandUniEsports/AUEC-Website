type FooterLinkProps = {
    title: string
    link: string
}

export default function FooterLink({title, link} : FooterLinkProps){
    return(
        <li>
            <a className="footer-link" href={link} target="_blank">{title}</a>
        </li>
    )
}