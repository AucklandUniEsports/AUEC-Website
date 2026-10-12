type SponsorCardProps = {
    link: string;
    img: string;
};

export default function SponsorCard({ link, img }: SponsorCardProps) {
    return (
        <a
            className="flex h-[180px] items-center justify-center bg-[#272727]/95 px-[62px]"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className="h-[180px] w-[180px] object-contain"
                src={img}
                alt="Company Logo"
            />
        </a>
    );
}
