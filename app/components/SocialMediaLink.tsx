type SocialMediaLinkProps = {
    icon: string;
    link: string;
}

export default function SocialMediaLink({icon, link} : SocialMediaLinkProps){
    return(
        <a className="social-media-link" href={link} target="_blank">
            <img className="social-media-icon" src={icon} alt="" />
        </a>
    );
}