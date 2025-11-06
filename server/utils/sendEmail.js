import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.yourdomain.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@benevolentworld.com",
    pass: "your_smtp_password",
  },
});

await transporter.sendMail({
  from: "info@benevolentworld.com",
  to: userEmail,
  subject: "Booking Confirmation",
  html: "<h3>Thank you for booking with Benevolent World!</h3>",
});
