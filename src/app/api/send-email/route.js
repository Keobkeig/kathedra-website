import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@kathedra.co',
      replyTo: email,
      subject: subject,
      text: `From: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    return new Response('Failed to send email', { status: 500 });
  }
}