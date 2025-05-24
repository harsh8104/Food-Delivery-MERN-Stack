import orderModel from "../models/Order.js";
import user from "../models/User.js";
import Stripe from "stripe";
import mailSender from "../util/MailsSender.js";
const stripe = new Stripe(process.env.STRIPE_SECRET);
//place-order
const placeOrder = async (req, res) => {
  try {
    const frontend_url = "https://full-stack-frontend-olt1.onrender.com";
    const newOrder = new orderModel({
      userId: req.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await user.findByIdAndUpdate(req.userId, {
      cartData: {},
    });
    const lineItems = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));
    lineItems.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 200,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  console.log(orderId, success);
  try {
    if (success) {
      const order = await orderModel.findByIdAndUpdate(orderId, {
        payment: true,
      });
      const User = await user.findById({
        _id: order.userId,
      });
      mailSender(
        User.email,
        "Your order placed successfully!!!",
        `
          <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Order Confirmation</title>
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
              .order-details {
                  background-color: #f9f9f9;
                  padding: 15px;
                  border-radius: 8px;
                  margin-top: 20px;
              }
              .order-details h3 {
                  margin: 0;
                  color: #555;
              }
              .order-details p {
                  margin: 5px 0;
                  color: #666;
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
                  <h1>Order Confirmation</h1>
              </div>
              <div class="email-content">
                  <h2>Hello ${User.name},</h2>
                  <p>Thank you for your order! We are thrilled to let you know that your order has been placed successfully. Here are the details:</p>
                  <div class="order-details">
                      <h3>Order Summary</h3>
                      <p>Order Number: <strong>${orderId}</strong></p>
                      <p>Order Date: <strong>${Date(Date.toLocaleString())}
                      </strong></p>
                      <p>Items Ordered:
                      ${order.items.map((item, index) => {
                        return `<p>Item ${index + 1}: ${item.name} x ${
                          item.quantity
                        } </p>`;
                      })}
                      </p>

                      <p>Total Amount: <strong>$${order.amount}</strong></p>
                  </div>
                  <p>Your order is being processed and will be delivered to you shortly. You can track your order status by visiting your account on our website.</p>
                  <p>If you have any questions or need further assistance, please don't hesitate to contact our customer support team.</p>
                  <p>Thank you for choosing [Quick Byte]!</p>
              </div>
              <div class="email-footer">
                  <p><a href="https://yourcompanywebsite.com">Visit our website</a> | <a href="https://yourcompanywebsite.com/orders">Track your order</a></p>
                  <p>&copy; ${new Date().getFullYear()} [Quick Byte]. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>`
      );
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({
        success: false,
        message: "Not Paid",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error,
    });
  }
};
const userOrders = async (req, res) => {
  try {
    console.log(req.userId);
    const orders = await orderModel.find({ userId: req.userId });
    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error",
    });
  }
};

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({
      success: true,
      message: "Status updated",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error",
    });
  }
};
export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
