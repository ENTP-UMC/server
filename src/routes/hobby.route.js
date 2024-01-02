import express from "express";
import { hobbyWrite,hobbyReadRecent,hobbyReadLike,hobbyReadSearch ,hobbyScrap} from "../controllers/hobby.controller.js";

export const hobbyRoute = express.Router();

//1번 최신순, 2번 좋아요 순 , 3번 키워드 검색 
hobbyRoute.post('', hobbyWrite)
hobbyRoute.post('/scrap',hobbyScrap)
hobbyRoute.get('/1',hobbyReadRecent)
hobbyRoute.get('/2',hobbyReadLike)
hobbyRoute.post('/3',hobbyReadSearch)
// userRoute.get('/info', userInfo)