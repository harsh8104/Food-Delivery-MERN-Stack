import express from "express";
import { adminLogin, verifyAdmin } from "../controllers/Admin.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);

adminRouter.post("/verify", verifyAdmin);

export default adminRouter;
