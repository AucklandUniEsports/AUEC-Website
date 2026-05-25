interface MerchInfoProps {
    orderLink: string;
}

export default function MerchInfo({ orderLink }: MerchInfoProps) {
    return (
        <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen bg-white flex flex-col items-center justify-center p-8 md:p-16 text-center">
            <p className="text-xl mb-4">2026 Fall/Winter Drop</p>
            <h2 className="text-4xl md:text-6xl font-medium mb-4">
                "The Collection"
            </h2>
            <p className="text-xl mb-6">NZ$ 60.00</p>
            <p className="text-xl mb-8 leading-relaxed">
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
                className="text-base bg-black text-white px-24 py-4 tracking-widest"
            >
                ORDER NOW
            </a>
        </div>
    );
}