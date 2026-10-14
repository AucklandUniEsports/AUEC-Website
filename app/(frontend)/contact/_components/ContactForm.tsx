"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import FormField from "./FormField";
import CategoryField from "./CategoryField";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [statusMessage, setStatusMessage] = useState<string>("");
    const [turnstileToken, setTurnstileToken] = useState<string>("");
    const turnstileRef = useRef<TurnstileInstance>(undefined);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (!turnstileToken) {
            setStatus("error");
            setStatusMessage("Please complete the verification check first.");
            return;
        }

        setStatus("sending");
        setStatusMessage("");
        const formData = new FormData(form);
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
                setStatus("sent");
                setStatusMessage("Message sent! We'll get back to you soon.");
                form.reset();
            } else {
                setStatus("error");
                setStatusMessage("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setStatusMessage("An error occurred. Please try again later.");
        } finally {
            setTurnstileToken("");
            turnstileRef.current?.reset();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-6">
            <input
                className="absolute -top-2499.75 -left-2499.75 opacity-0"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
            />

            <div className="grid gap-6 md:grid-cols-2">
                <FormField
                    label="Name"
                    id="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                />
                <FormField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                />
            </div>

            <CategoryField />

            <FormField
                label="Message"
                id="message"
                placeholder="What's on your mind?"
                multiline
                required
            />

            <div>
                <div className="flex flex-wrap items-end gap-x-6 gap-y-4">
                    <Turnstile
                        ref={turnstileRef}
                        className="min-h-16.25"
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        options={{ theme: "dark" }}
                        onSuccess={(token) => setTurnstileToken(token)}
                        onExpire={() => setTurnstileToken("")}
                    />

                    <button
                        className="ml-auto w-full cursor-pointer rounded-[5px] bg-[#e2ff00] px-4 py-3 text-base font-medium text-black transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit min-[700px]:text-xl"
                        type="submit"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? "Sending..." : "Send Message."}
                    </button>
                </div>

                <p
                    className={`mt-4 empty:mt-0 sm:text-right ${status === "error" ? "text-[#df5f5f]" : "text-[#e2ff00]"}`}
                    role="status"
                    aria-live="polite"
                >
                    {statusMessage}
                </p>
            </div>
        </form>
    );
}
