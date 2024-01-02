import { BaseError } from "../../config/error.js";
import {status} from "../../config/response.status.js"
import {addResponseDTO} from "../dtos/hobby.dto.js"
import {addHobby,getHobbyRecent,getHobbyLikes,getHobbySearch,addScrap} from "../models/hobby.dao.js"

export const joinHobby = async (body) => {
    const time =new Date

    const joinHobbyData = await addHobby({
        'title' : body.title,
        'content' : body.content,
        'total_num':body.total_num,
        'in_num':1,
        'status':1,
        'start_date':body.start_date,
        'end_date':body.end_date,
        'created_at':time,
        'user_id':body.user_id,
        'tag':body.tag
    });

   
        return addResponseDTO(joinHobbyData);
    
}
export const joinScrap = async (body)=>{

    const joinscrapData = await addScrap({
        'user_id':body.user_id,
        'hobby_group_id':body.hobby_group_id
    });
    return joinscrapData;
}

export const viewHobbyRecent = async()=>{

    const getHobbyData = await getHobbyRecent()
        
    return getHobbyData;
}
export const viewHobbyLike = async()=>{

    const getHobbyData = await getHobbyLikes()
        
    return getHobbyData;
}
export const viewHobbySearch = async(data)=>{
    
    const getHobbyData = await getHobbySearch({
        'keyword':data.keyword
    });
        
    return getHobbyData;
}