import express from "express";
import {loginHandler} from "../controllers/authController";
import validateResource from "../middlewares/validateResource";
import { loginSchema} from "../schemas/authSchema";

const authRouter = express.Router();

// Route for login
authRouter.post("/api/login", validateResource(loginSchema), loginHandler);

export default authRouter;
