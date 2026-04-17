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
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} required={required} />
        </div>
    );
}
