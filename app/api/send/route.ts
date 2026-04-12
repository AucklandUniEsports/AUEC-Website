import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, category, message, website } = body;

        if (website) {
            // Return 200 OK so the bot thinks it succeeded.
            return Response.json(
                { success: true, message: "Message sent!" },
                { status: 200 }
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
