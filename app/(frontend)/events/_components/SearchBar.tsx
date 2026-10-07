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
                        w-full h-12 rounded-[5px]
                        bg-[#272727] border border-transparent
                        pl-11 pr-4
                        text-white
                        placeholder:text-[#777777]
                        outline-none transition-colors
                        focus:border-[#5e5e5e]
                    "
                    value={input}
                    placeholder="Search for an event..."
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        </div>
    );
}
