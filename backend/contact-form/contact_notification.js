const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sureshjaiswal808@gmail.com", // Replace with your email
    pass: "Omjee1234@@@", // Replace with your email password or app-specific password
  },
});

// Form submission endpoint
app.post("/submit-form", (req, res) => {
  const { name, email, phone, reason } = req.body;

  // Email options
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "sureshjaiswal808@gmail.com", // Replace with your email
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Reason: ${reason}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Form submitted successfully" });
    }
  });
});

module.exports = app;