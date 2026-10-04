import ContactForm from "./_components/ContactForm";
import ContactDetail from "./_components/ContactDetail";
import SocialMediaLinkBar from "../_components/SocialMediaLinkBar";

const ContactDetails = [
    {
        label: "Email",
        value: "uoaesports@gmail.com",
        link: "mailto:uoaesports@gmail.com",
    },
    {
        label: "Discord",
        value: "Join the AUEC server",
        link: "https://discord.gg/ZmcUREd",
    },
    {
        label: "Find Us",
        value: "11 Symonds Street, Auckland 1010",
        link: "https://maps.app.goo.gl/j8eVGiy8MUAXRWra8",
    },
];

export default function Contact() {
    return (
        <section className="flex flex-col gap-8 px-8 pt-40 pb-16 min-[950px]:px-16">
            <div className="flex flex-col gap-4">
                <h1 className="home-title">Get in Touch.</h1>
                <p className="standard-text max-w-3xl">
                    Got a question, want to collaborate, or need a hand with
                    something club related? Send us a message and we&apos;ll get
                    back to you as soon as we can.
                </p>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-stretch">
                {/* No card on phones: Turnstile is a fixed 300px and won't fit inside the padding */}
                <div className="sm:rounded-[5px] sm:bg-[#272727] sm:p-6 md:p-8">
                    <ContactForm />
                </div>

                {/* On desktop the cards grow to fill the form's height */}
                <aside className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:flex lg:flex-col lg:*:flex-1">
                    {ContactDetails.map((detail) => (
                        <ContactDetail
                            key={detail.label}
                            label={detail.label}
                            value={detail.value}
                            link={detail.link}
                        />
                    ))}
                    <div className="flex flex-col justify-center gap-4 rounded-[5px] bg-[#272727] p-6">
                        <p className="text-sm uppercase tracking-[1.2px] text-[#aaaaaa]">
                            Socials
                        </p>
                        <SocialMediaLinkBar />
                    </div>
                </aside>
            </div>
        </section>
    );
}
