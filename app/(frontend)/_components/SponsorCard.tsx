type SponsorCardProps = {
    link: string;
    img: string;
};

export default function SponsorCard({ link, img }: SponsorCardProps) {
    return (
        <a className="sponsor-card" href={link} target="_blank">
            <img
                className="sponsor-icon"
                src={`${process.env.NEXT_PUBLIC_SUPABASE_OBJECT_STORAGE_URL}${img}`}
                alt="Company Logo"
            />
        </a>
    );
}