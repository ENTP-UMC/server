import express from "express";
import { userSignin,userInfo } from "../controllers/user.controller.js";

export const userRoute = express.Router();


userRoute.put('/signin', userSignin)
userRoute.get('/info', userInfo)