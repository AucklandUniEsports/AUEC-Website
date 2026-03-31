"use client";

import { useState } from "react";
import StandardButton from "../components/StandardButton";
import { Turnstile } from "@marsidev/react-turnstile";

export default function About() {
    const [status, setStatus] = useState<string>("");
    const [turnstileToken, setTurnstileToken] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");

        // Gather form data
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const payload = { ...data, turnstileToken };
        try {
            // Send data to your new API route
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                (e.target as HTMLFormElement).reset(); // Clear the form
            } else {
                setStatus("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            <section className="about">
                <div className="about-top">
                    <h1 className="home-title">Contact</h1>
                    <p className="standard-text">
                        The Auckland University Esports Club is a student
                        association operated by students studying at the
                        University of Auckland, aiming to cultivate a thriving
                        community of people with a passion for gaming and
                        competition.
                    </p>
                </div>
                <div className="about-bottom">
                    <div className="about-bottom-section">
                        <form onSubmit={handleSubmit} className="contact-form">
                            {/* Invisible Honeypot field*/}
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

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">
                                    Inquiry Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select a category...
                                    </option>
                                    <option value="General Inquiry">
                                        General Inquiry
                                    </option>
                                    <option value="Sponsorship">
                                        Sponsorship
                                    </option>
                                    <option value="Feedback">Feedback</option>
                                    <option value="Membership">
                                        Membership
                                    </option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>
                            <div style={{ margin: "1rem 0" }}>
                                <Turnstile
                                    siteKey={
                                        process.env
                                            .NEXT_PUBLIC_TURNSTILE_SITE_KEY!
                                    }
                                    onSuccess={(token) =>
                                        setTurnstileToken(token)
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                className="button-standard button-lime"
                                disabled={status === "Sending..."}
                            >
                                {status === "Sending..."
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>

                            {/* Display success/error messages */}
                            {status && (
                                <p
                                    className="form-status"
                                    style={{ marginTop: "1rem" }}
                                >
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
