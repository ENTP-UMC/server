import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { postResponseDTO, getResponseDTO } from "../dtos/project.dto.js"
import { postProject, setProjectTag, getProjectTagToProjectID, setProjectStack } from "../models/project.dao.js";

export const uploadProject = async (body) => {
    console.log("body is", body);
    var created_time = new Date();
    const uploadProjectData = await postProject({
        'user_id': 11,
        'name': body.name,
        'title': body.title,
        'content': body.content,
        'status': 0,
        'period': body.period,
        'start_date': body.start_date,
        'created_at': created_time,
        'contact': body.contact,
        'contact_url': body.contact_url
    });

    if (uploadProjectData == -1){
        throw new BaseError(status.BAD_REQUEST);
    } else{
        for (let i = 0; i < body.project_tag.length; i++) {
            await setProjectTag(uploadProjectData, body.project_tag[i]);
        }
        return postResponseDTO(uploadProjectData);
    }
}

// export const viewProject = async (body) => {
//     return getResponseDTO(uploadProjectData);
// }