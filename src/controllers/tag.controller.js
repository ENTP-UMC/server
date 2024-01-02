import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import {viewProject,viewStudy,viewHobby} from "../services/tag.service.js";



export const projectTagInfo = async (req,res,next)=>{
    console.log("정보 조회를 요청하셨습니다");
    res.send(response(status.SUCCESS, await viewProject()));
}
export const studyTagInfo = async (req,res,next)=>{
    console.log("정보 조회를 요청하셨습니다");
    res.send(response(status.SUCCESS, await viewStudy()));
}

export const hobbyTagInfo = async (req,res,next)=>{
    console.log("정보 조회를 요청하셨습니다");
    res.send(response(status.SUCCESS, await viewHobby()));
}


