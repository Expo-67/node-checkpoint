import nodemailer from "nodemailer";

// Set up the transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or any other email service provider
  auth: {
    user: "jason@gmail.com", // replace with your email
    pass: "567", // replace with your password or app-specific password
  },
});

// Email options
const mailOptions = {
  from: "jasin@gmail.com",
  to: "kinungijames29@gmail.com", // can be same as sender or different
  subject: "Test Email from Node.js",
  text: "Hello! This is a test email sent using Node.js and Nodemailer.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error sending email:", error);
  }
  console.log("Email sent:", info.response);
});
