import userModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import mailSender from "../util/MailsSender.js";
import otpGenerator from "otp-generator";
import "dotenv/config";
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1y" });
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(203)
        .json({ message: "User Doesn't Exist", success: false });
    }
    const isPasswordTrue = await bcrypt.compare(password, user.password);
    if (!isPasswordTrue) {
      return res
        .status(203)
        .json({ message: "Password is incorrect", success: false });
    }
    const token = createToken(user._id);

    res.status(200).json({
      message: "Login Successful",
      success: true,
      token,
      avatar: user.avatar,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", success: false });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(203).json({
        message: "User already exists",
        success: false,
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(203).json({ message: "Invalid email", success: false });
    }
    if (password.length < 8) {
      return res.status(203).json({
        message: "Please enter a strong password",
        success: false,
      });
    }
    const avatar = `https://api.dicebear.com/9.x/initials/svg?seed=${name}`;
    const OTP = 0;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
      avatar,
      OTP,
    });
    const token = createToken(newUser._id);
    return res.status(200).json({
      message: "User created successfully",
      success: true,
      token,
      avatar,
      OTP,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

const verifyAccount = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({
      email,
    });
    const OTP = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits: true,
      lowerCaseAlphabets: false,
    });
    const name = user.name;
    mailSender(
      email,
      "OTP",
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
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
        .otp-code {
            font-size: 24px;
            font-weight: bold;
            color: tomato;
            margin: 20px 0;
            text-align: center;
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
        .coupon-message {
            background-color: #ffe5e5;
            border-radius: 8px;
            padding: 15px;
            margin-top: 20px;
            text-align: center;
            color: #555;
        }
        .coupon-message strong {
            color: tomato;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <img src='https://res.cloudinary.com/db99r7ugz/image/upload/v1722530561/logo_ijofdh.png' alt="Company Logo">
            <h1>Verify Your Email Address</h1>
        </div>
        <div class="email-content">
            <p>Hello, ${name}</p>
            <p>Thank you for registering with us. To complete your sign-up process, please use the following One-Time Password (OTP) to verify your email address:</p>
            <div class="otp-code">${OTP}</div>
            
            <p>This OTP is valid for the next 10 minutes. Please do not share this code with anyone.</p>
            <p>If you did not request this email, please ignore it.</p>

            <div class="coupon-message">
                <p><strong>Special Offer:</strong> Use the coupon code <strong>FIRST-ORDER</strong> during your first purchase to enjoy <strong>free delivery</strong>!</p>
            </div>
        </div>
        <div class="email-footer">
            <p>Best regards,<br>Quick Byte</p>
            <p><a href="https://yourcompanywebsite.com">Visit our website</a></p>
        </div>
    </div>
</body>
</html>
`
    );
    const newUser = await userModel.findOneAndUpdate(
      { email },
      {
        OTP,
      },
      {
        new: true,
      }
    );
    return res
      .status(200)
      .json({ message: "OTP sent successfully", success: true, newUser });
  } catch (error) {
    return res.status(401).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

const removeUser = async (req, res) => {
  try {
    const { email } = req.body;
    await userModel.findOneAndDelete({ email });
    return res
      .status(200)
      .json({ message: "User deleted successfully", success: true });
  } catch (error) {
    return res.status(401).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export { loginUser, registerUser, verifyAccount, removeUser };
