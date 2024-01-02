import { BaseError } from "../../config/error.js";
import {status} from "../../config/response.status.js"
import {signinResponseDTO} from "../dtos/user.dto.js"
import {addUser,getUser} from "../models/user.dao.js"

export const joinUser = async (body) => {
    

    const joinUserData = await addUser({
        'id': body.id,
        'nickname':body.nickname,
        'school':body.school,
        'phone':body.phone
    });

   
        return signinResponseDTO(joinUserData);
    
}

export const viewUser = async()=>{

    const getUserData = await getUser()
        
    return getUserData;
}
