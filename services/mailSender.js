const nodemailer = require("nodemailer");
require('dotenv').config();
module.exports = async function mailSender(emails, value) {
 
  let testAccount = await nodemailer.createTestAccount();
  const ownerMail = process.env.EMAIL;
  const pass = process.env.PASSWORD;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: ownerMail, 
      pass: pass,
    },
  });

 

  for (email of emails) {
    let info = await transporter.sendMail({
      from: '"BTC rate 👻" <foo@example.com>', 
      to: `${email}`, 
      subject: 'BTC/UAH', 
      text: `BTC/UAH ${value}`, 
    });
  }
};


