import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
    avatar: {
      type: String,
    },
    OTP:{
      type:Number,
    }
  },
  {
    minimize: false,
  }
);

const userModel = mongoose.models.User || mongoose.model("User", User);
export default userModel;
