import express from "express";
import { ContactUs } from "../controllers/ContactUs.js";

const contactRouter = express.Router();

contactRouter.post("/contact-us", ContactUs);

export default contactRouter;
