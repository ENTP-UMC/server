import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { response } from "./config/response.js";
import {baseResponse} from "./config/response.status.js";

export const KakaoService = async(userInfo) =>{
    const email = userInfo.email;
        const name = userInfo.profile.nickname;
        const provider = 'kakao';
        let token = jwt.sign({
            name: name,
            email: email,
            provider: provider
        },
        process.env.JWT_SECRET,{
            expiresIn:"10m",
        });
        return response(baseResponse.SUCCESS,
        {
            'email' : email,
            'name': name,
            'token' : token,
            'expires' : "7d",
        });
}