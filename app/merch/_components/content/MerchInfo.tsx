interface MerchInfoProps {
    orderLink: string;
}

export default function MerchInfo({ orderLink }: MerchInfoProps) {
    return (
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen bg-white flex flex-col items-center justify-center p-8 lg:p-16 text-center">
            <p className="text-xl mb-4 tracking-tight">2026 Fall/Winter Drop</p>
            <h2 className="text-[2.625rem] lg:text-[5.25rem] font-normal mb-4 leading-none tracking-tight">
                "The Collection"
            </h2>
            <p className="text-xl mb-6 leading-none tracking-tight">NZ$ 60.00</p>
            <p className="text-xl mb-8 leading-none tracking-tight">
                A collection of one hoodie is still a collection.
                <br />
                <br />
                All units made to order.
                <br />
                Ready to collect in semester two.
            </p>
            <a
                href={orderLink}
                target="_blank"
                className="text-base bg-black text-white px-12 lg:px-28 py-3.5 tracking-widest"
            >
                ORDER NOW
            </a>
        </div>
    );
}