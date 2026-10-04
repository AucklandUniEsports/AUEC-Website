// Values end up in the email subject line, so keep them human readable
const Categories = ["General Inquiry", "Sponsorship", "Feedback", "Membership"];

export default function CategoryField() {
    return (
        <fieldset>
            <legend className="mb-3 text-sm uppercase tracking-[1.2px] text-[#aaaaaa]">
                What&apos;s it about?
            </legend>
            <div className="flex flex-wrap gap-3">
                {Categories.map((category) => (
                    <label key={category} className="relative cursor-pointer">
                        <input
                            className="peer sr-only"
                            type="radio"
                            name="category"
                            value={category}
                            required
                        />
                        <span className="block rounded-[4px] px-3 py-2 text-sm tracking-[-0.6px] text-[#aaaaaa] outline-2 outline-[#aaaaaa] transition-colors select-none hover:text-white hover:outline-white peer-checked:bg-[#e2ff00] peer-checked:text-black peer-checked:outline-[#e2ff00] peer-checked:hover:text-black peer-checked:hover:outline-[#e2ff00] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white">
                            {category}
                        </span>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}
