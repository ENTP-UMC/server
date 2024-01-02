import express from "express";
import { userSignin } from "../controllers/user.controller.js";

export const userRoute = express.Router();


userRoute.put('/signin', userSignin)