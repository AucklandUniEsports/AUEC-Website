"use client";

import SearchIcon from "./SearchIcon";
interface Input {
    input: string;
    handleChange: (value: string) => void;
}

export default function SearchBar({ input, handleChange }: Input) {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="relative w-full">
                <SearchIcon />
                <input
                    className="
                        w-full border border-[#5e5e5e]
                        rounded-lg outline-none
                        py-3 pl-11 pr-4
                        text-neutral-200
                        placeholder:text-[#aaaaaa]
                    "
                    value={input}
                    placeholder="Search for an event..."
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>
    );
}
