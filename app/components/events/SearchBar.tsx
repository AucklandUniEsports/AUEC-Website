"use client";
interface Input {
    input: string;
    handleChange: (value: string) => void;
}

export default function SearchBar({ input, handleChange }: Input) {
    return (
        <input
            className="searchbar"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
        ></input>
    );
}
