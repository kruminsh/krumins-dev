import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactSchema.parse(body);

    // TODO: Implement email sending logic here
    // Options:
    // 1. SendGrid: await sendgrid.send({ to: "your-email", from: validatedData.email, ... })
    // 2. Mailgun: await mailgun.messages.create(...)
    // 3. Resend: await resend.emails.send(...)
    // 4. Azure Function: await fetch("your-azure-function-url", { method: "POST", body: ... })
    // 5. Custom .NET API: await fetch("your-dotnet-api/contact", { method: "POST", body: ... })

    console.log("Contact form submission:", validatedData);

    // Simulate success for now
    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully. (Email sending not yet implemented)",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
