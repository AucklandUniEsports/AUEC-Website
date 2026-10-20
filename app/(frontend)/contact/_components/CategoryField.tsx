"use client";

import { useRef } from "react";

const Categories = ["General Inquiry", "Sponsorship", "Feedback", "Membership"];

export default function CategoryField() {
    // Radios can't normally be unselected. Remember whether the chip was
    // already checked when the press started, and if so clear it on click.
    const wasChecked = useRef(false);

    return (
        <fieldset>
            <legend className="mb-3 text-sm uppercase tracking-[1.2px] text-[#aaaaaa]">
                What&apos;s it about?
            </legend>
            {/* pl-1 lines the skewed chips' bottom-left corners up with the legend */}
            <div className="flex flex-wrap gap-3 pl-1">
                {Categories.map((category) => (
                    <label
                        key={category}
                        className="relative cursor-pointer"
                        onPointerDown={(e) => {
                            wasChecked.current =
                                e.currentTarget.querySelector("input")!.checked;
                        }}
                    >
                        <input
                            className="peer sr-only"
                            type="radio"
                            name="category"
                            value={category}
                            required
                            onClick={(e) => {
                                if (wasChecked.current) e.currentTarget.checked = false;
                                wasChecked.current = false;
                            }}
                        />
                        <span className="block -skew-x-12 bg-[#3d3d3d] px-5 py-2 font-syne text-sm tracking-widest text-white uppercase transition-[background-color,color,box-shadow] duration-200 select-none hover:bg-[#4d4d4d] hover:shadow-[0_0_1.25rem_rgb(255_255_255/0.15)] peer-checked:bg-neon-green peer-checked:hover:bg-neon-green peer-checked:hover:shadow-[0_0_1.25rem_rgb(226_255_0/0.45)] peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white">
                            <span className="block skew-x-12">{category}</span>
                        </span>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}
