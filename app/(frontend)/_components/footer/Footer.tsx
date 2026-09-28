import FooterLink from "./FooterLink";
import SocialMediaLinkBar from "../SocialMediaLinkBar";

const FooterLinks = [
    {
        title: "Brand Kit",
        link: "https://drive.google.com/drive/folders/1OHntE402jAApx0g-LOMj0Q6p1Pinmh8i?usp=sharing"
    },
    {
        title: "Club Constitution",
        link: "https://docs.google.com/document/d/1y3Gi6v5fEPRcjT7t76X0sTmYh6dcyaDc2lDCk3_h1VI/edit?usp=sharing"
    },
        {
        title: "Sponsorship Deck",
        link: "AUEC 2026 Sponsorship Deck.pdf"
    }
];

export default function Footer(){
    return (
        <footer className="flex h-fit flex-col items-center justify-center gap-4 bg-[#272727] p-8 text-white">
            <div className="flex items-center justify-center gap-16">
                <div>
                    <img className="w-[300px]" src="auec_logo.svg" alt="" />
                    <SocialMediaLinkBar />
                </div>
                <div className="flex gap-8">
                    <div>
                        <p>Information</p>
                        <ul className="flex flex-col gap-0.5">
                            {FooterLinks.map((link, index) => (
                                <FooterLink
                                    title={link.title}
                                    key={index}
                                    link={link.link}
                                />
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>Contact</p>
                        <FooterLink
                            title={
                                "Address: 11 Symonds Street, Auckland 1010, New Zealand"
                            }
                            link="https://maps.app.goo.gl/j8eVGiy8MUAXRWra8"
                        />
                        <FooterLink
                            title={"Email: uoaesports@gmail.com"}
                            link="mailto:uoaesports@gmail.com"
                        />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="w-full border-t border-solid border-[#6b6b6b]"></div>
                <p>©2025 Auckland University Esports Club</p>
            </div>
        </footer>
    );
}