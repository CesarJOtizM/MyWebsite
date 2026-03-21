import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';
import { ContactEmail } from '@/components/emails/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = 'cesarjavierortizmontero+website@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 },
      );
    }

    const { name, email, message, honeypot } = result.data;

    // Spam check
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio <hello@cesarortiz.co>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `New message from ${name} — cesarortiz.co`,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
