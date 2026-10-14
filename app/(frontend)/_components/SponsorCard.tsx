type SponsorCardProps = {
    link: string;
    img: string;
};

export default function SponsorCard({ link, img }: SponsorCardProps) {
    return (
        <a
            className="sponsor-card transition-shadow duration-200 ease-out hover:shadow-[0_0_1.5rem_rgb(170_170_170/0.35)] hover:ring-[0.03125rem] hover:ring-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
            href={link}
            target="_blank"
        >
            <img
                className="sponsor-icon"
                src={`${process.env.NEXT_PUBLIC_SUPABASE_OBJECT_STORAGE_URL}${img}`}
                alt="Company Logo"
            />
        </a>
    );
}