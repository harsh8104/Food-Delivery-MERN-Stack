import mongoose from "mongoose";
import "dotenv/config";
export const connectDb = async () => {
  await mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("DB connected Successfully");
    })
    .catch(() => {
      console.log("DB connection failed");
    });
};
