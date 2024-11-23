import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

app.post("/submit-email", (req, res) => {
  const userEmail = req.body.email;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "aaadarsh16@gmail.com", // Your email to receive notifications
    subject: "New Contact Request",
    text: `Hi Adarsh,\n\nSomeone wants to contact you. Here is their email address: ${userEmail}\n\nBest regards,\nYour Website`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    res.send("Email submitted successfully");
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
