import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            secure: true,
        });

        const mailOptions = {
            from: `"${name} (Portfolio)" <${process.env.EMAIL_USER}>`,
            to: 'navya30jain2005@gmail.com',
            replyTo: email,
            subject: `Portfolio Contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4f46e5;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
