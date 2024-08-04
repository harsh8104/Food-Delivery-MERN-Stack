import Contact from "../models/ContactUs.js";
import mailSender from "../util/MailsSender.js";

const ContactUs = async (req, res) => {
  try {
    const { name, email, message, phone } = req.body;

    const response = await Contact.create({
      name,
      email,
      message,
      phone,
    });
    mailSender(
      email,
      "Thanks for reaching out us",
      `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Us Response</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
            }
            .email-container {
                max-width: 600px;
                margin: 40px auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .email-header {
                background-color: tomato;
                color: white;
                text-align: center;
                padding: 20px;
            }
            .email-header img {
                max-width: 150px;
                margin-bottom: 10px;
            }
            .email-content {
                padding: 20px;
            }
            .email-content h2 {
                color: tomato;
                margin-top: 0;
            }
            .email-footer {
                text-align: center;
                padding: 20px;
                background-color: #f4f4f4;
                font-size: 14px;
                color: #777;
            }
            .email-footer a {
                color: tomato;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="email-header">
                <img src="https://res.cloudinary.com/db99r7ugz/image/upload/v1722530561/logo_ijofdh.png" alt="Company Logo">
                <h1>Thank You for contacting us</h1>
            </div>
            <div class="email-content">
                <h2>Hello,${name}</h2>
                <p>Thank you for your valuable feedback we look into it.</p>
                <p>In the meantime, feel free to explore more about our services and offerings on our website.</p>
                <p>Best regards,<br>Quick Byte</p>
            </div>
            <div class="email-footer">
                <p><a href="https://full-stack-frontend-olt1.onrender.com">Visit our website</a></p>
            </div>
        </div>
    </body>
    </html>`
    );
    return res.status(200).json({
      success: true,
      response,
      message: "Thanks for contact us",
    });
  } catch (error) {
    return res.status(402).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export { ContactUs };
