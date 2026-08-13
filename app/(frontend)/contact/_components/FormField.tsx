interface FormFieldProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
}

export default function FormField({
    label,
    id,
    type = "text",
    required,
}: FormFieldProps) {
    return (
        <div className="form-group className='text-white w-full mt-4">
            <label htmlFor={id}>{label}</label> <br></br>
            <input
                className="border border-white rounded w-full p-2 mt-2"
                type={type}
                id={id}
                name={id}
                required={required}
            />
        </div>
    );
}
