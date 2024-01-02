
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import {joinHobby,joinScrap} from "../services/hobby.service.js";
import { viewHobbyRecent,viewHobbyLike,viewHobbySearch } from "../services/hobby.service.js";

export const hobbyWrite = async (req,res,next)=>{
    console.log("작성을 요청하였습니다!");
    console.log("body:",req.body);

    res.send(response(status.SUCCESS, await joinHobby(req.body)));

}
export const hobbyScrap = async (req,res,next)=>{
    console.log("t스크랩을 요청하셨습니다!");
    console.log("body:",req.body);

    res.send(response(status.SUCCESS, await joinScrap(req.body)));

}


export const hobbyReadRecent = async (req,res,next)=>{
    console.log("정보 조회를 요청하셨습니다");
    res.send(response(status.SUCCESS, await viewHobbyRecent()));
}
export const hobbyReadLike = async (req,res,next)=>{
    console.log("정보 조회를 요청하셨습니다");
    res.send(response(status.SUCCESS, await viewHobbyLike()));
}
export const hobbyReadSearch = async (req,res,next)=>{
    console.log("정보 조회를 요청하셨습니다");
    res.send(response(status.SUCCESS, await viewHobbySearch(req.body)));
}