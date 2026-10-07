interface FormFieldProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
    autoComplete?: string;
    multiline?: boolean;
}

const inputClassName =
    "w-full rounded-[5px] bg-[#272727] px-4 py-3 text-white outline-none transition-shadow placeholder:text-[#6b6b6b] focus:ring-2 focus:ring-[#e2ff00] sm:bg-[#1a1a1a]";

export default function FormField({
    label,
    id,
    type = "text",
    required,
    placeholder,
    autoComplete,
    multiline,
}: FormFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <label
                className="text-sm uppercase tracking-[1.2px] text-[#aaaaaa]"
                htmlFor={id}
            >
                {label}
            </label>
            {multiline ? (
                <textarea
                    className={`${inputClassName} resize-y`}
                    id={id}
                    name={id}
                    rows={6}
                    required={required}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    className={inputClassName}
                    type={type}
                    id={id}
                    name={id}
                    required={required}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                />
            )}
        </div>
    );
}
