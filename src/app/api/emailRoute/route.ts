import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// API call from email form
export async function POST(req: Request) {
  try {
    // JSON from client
    const { name, email, message } = await req.json();

    // Simple server side validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Manglende felt" }, { status: 400 });
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // GMAIL adress from .env
        pass: process.env.EMAIL_APP_PASSWORD, // App password from .env
      },
    });

    // Define used email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sent to yourself
      subject: `Ny henvendelse fra ${name}`,
      text: `Navn: ${name}\nE-post: ${email}\n\nMelding:\n${message}`,
      replyTo: email,
    };

    // Send
    await transporter.sendMail(mailOptions);

    // Return OK
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[EMAIL ERROR]", error);
    return NextResponse.json({ error: "Noe gikk galt under sending" }, { status: 500 });
  }
}
