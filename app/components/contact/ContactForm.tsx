"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import FormField from "./FormField";

export default function ContactForm() {
    const [status, setStatus] = useState<string>("");
    const [turnstileToken, setTurnstileToken] = useState<string>("");

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");
        const formData = new FormData(e.currentTarget);
        const payload = {
            ...Object.fromEntries(formData.entries()),
            turnstileToken,
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("An error occurred. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                style={{
                    position: "absolute",
                    opacity: 0,
                    top: "-9999px",
                    left: "-9999px",
                }}
            />

            <FormField label="Name" id="name" type="text" required />
            <FormField label="Email" id="email" type="email" required />

            <div className="form-group">
                <label htmlFor="category">Inquiry Category</label>
                <select id="category" name="category" required defaultValue="">
                    <option value="" disabled>
                        Select a category...
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Membership">Membership</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required />
            </div>

            <div style={{ margin: "1rem 0" }}>
                <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={(token) => setTurnstileToken(token)}
                />
            </div>

            <button
                type="submit"
                className="button-standard button-lime"
                disabled={status === "Sending..."}
            >
                {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {status && (
                <p className="form-status" style={{ marginTop: "1rem" }}>
                    {status}
                </p>
            )}
        </form>
    );
}
