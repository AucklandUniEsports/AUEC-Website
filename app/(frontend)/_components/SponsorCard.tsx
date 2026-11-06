type SponsorCardProps = {
    link: string;
    img: string;
};

export default function SponsorCard({ link, img }: SponsorCardProps) {
    return (
        <a
            className="group relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-[5px] bg-[#272727] md:aspect-auto md:h-49 transition-colors duration-300 ease-out hover:bg-[#2f2f2f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
            href={link}
            target="_blank"
        >
            <img
                className="w-[70%] max-w-45 opacity-85 transition duration-500 ease-out group-hover:scale-110 group-hover:opacity-100 motion-reduce:transition-none"
                src={`${process.env.NEXT_PUBLIC_SUPABASE_OBJECT_STORAGE_URL}${img}`}
                alt="Company Logo"
            />
        </a>
    );
}
