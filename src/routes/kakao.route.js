import express from "express";
import { KakaoController,KakaController } from "../controllers/kakao.controller";

export const kakaoRoute = express.Router();

kakaoRoute.post('',KakaController);

