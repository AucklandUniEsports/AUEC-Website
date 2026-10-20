import FooterLink from "./FooterLink";
import SocialMediaLinkBar from "../SocialMediaLinkBar";

const FooterLinks = [
    {
        title: "Brand Kit",
        link: "https://drive.google.com/drive/folders/1OHntE402jAApx0g-LOMj0Q6p1Pinmh8i?usp=sharing",
    },
    {
        title: "Club Constitution",
        link: "https://docs.google.com/document/d/1y3Gi6v5fEPRcjT7t76X0sTmYh6dcyaDc2lDCk3_h1VI/edit?usp=sharing",
    },
    {
        title: "Sponsorship Deck",
        link: "/AUEC-2026-Sponsorship-Deck.pdf",
    },
];

export default function Footer(){
    return (
        <footer className="flex w-full flex-col items-center justify-center gap-4 border-y border-[#8b5cf6] bg-gradient-to-b from-[#161616] from-65% to-[#1e1245] p-8 text-white">
            <div className="flex w-full flex-col items-center justify-center gap-4 md:w-auto md:flex-row md:gap-16 lg:gap-38">
                <div className="self-start md:self-auto">
                    <img
                        className="w-[200px] md:w-[300px]"
                        src="auec_logo.svg"
                        alt=""
                    />
                    <div className="hidden md:block">
                        <SocialMediaLinkBar />
                    </div>
                </div>
                <div className="flex gap-4 md:gap-16 lg:gap-38">
                    <div>
                        <p className="hidden md:block font-medium">Information</p>
                        <ul className="flex flex-col font-medium md:font-light text-md">
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
                            className="font-light text-xs md:text-sm"
                        />
                        <FooterLink
                            title={"Email: uoaesports@gmail.com"}
                            link="mailto:uoaesports@gmail.com"
                            className="font-light text-xs md:text-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full max-w-[900px] flex-col items-center justify-center gap-2 text-[#AAAAAA]">
                <div className="mt-5 w-full border-t border-solid border-[#AAAAAA]"></div>
                <div className="md:hidden">
                    <SocialMediaLinkBar />
                </div>
                <p className="text-sm">
                    ©2025 Auckland University Esports Club
                </p>
            </div>
        </footer>
    );
}
