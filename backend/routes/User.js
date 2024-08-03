import express from "express";

import {
  loginUser,
  registerUser,
  removeUser,
  verifyAccount,
} from "../controllers/User.js";

const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/verifyemail", verifyAccount);
userRouter.post("/removeuser", removeUser);
export default userRouter;
