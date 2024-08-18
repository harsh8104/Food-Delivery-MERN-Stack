import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/Food.js";
import userRouter from "./routes/User.js";
import cartRouter from "./routes/Cart.js";
import contactRouter from "./routes/Contact.js";
import "dotenv/config";
import orderRouter from "./routes/Order.js";
//app config

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());
// dbConnection
connectDb();
//Endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/contact", contactRouter);
app.get("/", (req, res) => {
  res.send("API WORKING");
});

//socket.io

import { Server } from "socket.io";
import { createServer } from "http";

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("send-message", ({ message, sender, timestamp }) => {
    // console.log(`Message from ${sender}: ${message}`);
    io.emit("receive-message", { message, sender, timestamp });
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
