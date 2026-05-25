import RotatingLogo from "./RotatingLogo";

export default function EntryTitle() {
    return (
        <div className="relative">
            <h1 className="text-white text-4xl md:text-7xl text-left">
                2026 F/W
                <br /> COLLECTION
            </h1>
            <RotatingLogo />
        </div>
    );
}
