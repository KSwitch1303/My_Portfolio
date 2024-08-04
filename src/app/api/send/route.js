import { NextResponse } from "next/server";

const nodemailer = require('nodemailer');
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
  const sendMail = async () => {
    let mailOptions = {
      from: email,
      to: 'ebimieteimisongo@gmail.com',
      subject: subject,
      html: `<h1>${subject}</h1>
          <p>New message submitted:</p>
          <p>From ${email}</p>
          <p>${message}</p>`
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Email sent: ' + info.response);
          resolve();
        }
      });
    });
  }
  try {
    await sendMail()
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
