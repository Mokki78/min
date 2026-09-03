import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "Nettsiden <onboarding@resend.dev>",
      to: process.env.EMAIL_SEND_TO!,
      replyTo: email,

      subject: subject || `Ny henvendelse fra ${name}`,

      text: `
Navn: ${name}
E-post: ${email}

Emne: ${subject || ""}

Melding:
${message}
      `,

      html: `
        <h2>Ny henvendelse fra nettsiden</h2>

        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Emne:</strong> ${subject || ""}</p>

        <h3>Melding:</h3>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.log("Email sent:", emailData?.id);

    return NextResponse.json(
      {
        success: true,
        emailId: emailData?.id,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}