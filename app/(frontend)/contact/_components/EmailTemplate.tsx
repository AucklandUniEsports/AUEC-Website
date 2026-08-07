import * as React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
    category: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    category,
    message,
}) => (
    <div>
        <h2>New Contact Form Submission</h2>
        <p>
            <strong>Name:</strong> {name}
        </p>
        <p>
            <strong>Email:</strong> {email}
        </p>
        <p>
            <strong>Category:</strong> {category}
        </p>
        <br />
        <p>
            <strong>Message:</strong>
        </p>
        <p>{message}</p>
    </div>
);
