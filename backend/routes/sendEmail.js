const { Router } = require('express');
const { createTransport } = require('nodemailer');

const routerMessage = Router();

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,

    //   pass: process.env.EMAIL_PASS,
    pass: process.env.EYAL_EMAIL_PASS, // Replace with your email password
  },
  tls: {
    rejectUnauthorized: false, // This ignores self-signed certificate errors
  },
});

routerMessage.post('/', async (req, res) => {
  const { name, email, message, phone } = req.body;

  try {
    const mailOptions = {
      // from: process.env.USER_EMAIL, // Replace with your email address
      from: email, // Replace with your email address
      // to: 'recipient_email@example.com', // Replace with the recipient's email address
      to: process.env.USER_EMAIL, // Replace with the recipient's email address
      subject: `New Message from Your Clients`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}:\nphone: ${phone}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ', info.response);
        res.send('Email sent successfully');
      }
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = routerMessage;
