import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string): Promise<boolean> {
    try {
        const response = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    secret: process.env.TURNSTILE_SECRET_KEY,
                    response: token,
                }),
            }
        );
        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error("Error verifying Turnstile token:", error);
        return false;
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, category, message, website, turnstileToken } =
            body;

        if (website) {
            return Response.json(
                { success: true, message: "Message sent!" },
                { status: 200 }
            );
        }
        const isValidToken = await verifyTurnstile(turnstileToken);
        if (!isValidToken) {
            return Response.json(
                { error: "Turnstile verification failed" },
                { status: 403 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: ["uoaesports@gmail.com"],
            replyTo: email,
            subject: `New Contact Form Submission: ${category} from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Category:</strong> ${category}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
