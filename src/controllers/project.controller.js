import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { uploadProject, viewProject } from "../services/project.service.js";

export const projectPost = async (req, res, next) => {
    console.log("게시글 작성을 요청하였습니다!");

    res.send(response(status.SUCCESS, await uploadProject(req.body)));
}

// export const projectGet = async (req, res, next) => {
//     console.log("게시글 조회를 요청하였습니다!");

//     res.send(response(status.SUCCESS, await viewProject(req.body)));
// }