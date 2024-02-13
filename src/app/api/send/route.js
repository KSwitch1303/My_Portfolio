import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_h1Fx1BiV_5RP1tLqnAmYeHqnNdcuBHrdF');
const fromEmail = 'onboarding@resend.dev';
const toEmail = 'ebimieteimisongo@gmail.com';
export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, toEmail],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>New message submitted:</p>
          <p>From {email}</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
