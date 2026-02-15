import SocialMediaLink from "./SocialMediaLink";

const SocialMediaLinks = [
    {
        title:"Discord",
        link:"discord.gg/ZmcUREd",
        icon:"discord.svg"
    },
    {
        title:"Instagram",
        link:"https://www.instagram.com/aucklanduniesports",
        icon:"instagram.svg"
    },
    {
        title:"TikTok",
        link:"https://www.tiktok.com/@aucklanduniesports",
        icon:"tiktok.svg"
    },
    {
        title:"Twitch",
        link:"https://www.twitch.tv/aucklanduniesports",
        icon:"twitch.svg"
    },
    {
        title:"X",
        link:"https://x.com/akluniesports",
        icon:"x.svg"
    },

]

export default function SocialMediaLinkBar(){
    return(
        <ul className="social-media-link-wrapper">
            {
                SocialMediaLinks.map((socialMediaLink, index) =>
                    <li key={index}>
                        <SocialMediaLink link={socialMediaLink.link} icon={socialMediaLink.icon}/>
                    </li>
                )
            }
        </ul>
    );
}