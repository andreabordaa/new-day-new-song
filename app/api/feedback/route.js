import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "New Day, New Song <onboarding@resend.dev>",
      to: process.env.FEEDBACK_EMAIL,
      replyTo: email,
      subject: `New feedback from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send feedback email:", error);
    return Response.json({ error: "Failed to send feedback" }, { status: 500 });
  }
}
