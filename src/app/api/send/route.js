import { NextResponse } from "next/server";
import { Resend } from "resend";

const nodemailer = require('nodemailer');
const resend = new Resend('re_h1Fx1BiV_5RP1tLqnAmYeHqnNdcuBHrdF');
const fromEmail = 'onboarding@resend.dev';
const toEmail = 'ebimieteimisongo@gmail.com';
const nodemailerPassword = "urfc muoc iutl qrxy";
export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ebimieteimisongo@gmail.com',
      pass: nodemailerPassword
    }
  });
  const sendMail = async (mail, name) => {
    let mailOptions = {
      from: email,
      to: 'ebimieteimisongo@gmail.com',
      subject: subject,
      html: `<h1>${subject}</h1>
          <p>New message submitted:</p>
          <p>From ${email}</p>
          <p>${message}</p>`
    };
    // mailOptions.to = mail
    // receiverName = name
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  try {
    sendMail(req.body.email, req.body.name)
    // const data = await resend.emails.send({
    //   from: fromEmail,
    //   to: [fromEmail, toEmail],
    //   subject: subject,
    //   react: (
    //     <>
    //       <h1>{subject}</h1>
    //       <p>New message submitted:</p>
    //       <p>From {email}</p>
    //       <p>{message}</p>
    //     </>
    //   ),
    // });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
