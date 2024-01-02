
import { BaseError } from "../../config/error.js";
import {status} from "../../config/response.status.js"
import {getProjectTag,getStudyTag,getHobbyTag} from "../models/tag.dao.js"

export const viewProject =async()=>{

    const projectTag = await getProjectTag()
    return projectTag;
}
export const viewStudy =async()=>{

    const studytTag = await getStudyTag()
    return studytTag;
}
export const viewHobby =async()=>{

    const hobbyTag = await getHobbyTag()
    return hobbyTag;
}