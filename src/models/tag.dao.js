

import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {getProjectTagName,getStudyTagName,getHobbyTagName } from "./tag.sql.js";

export const getProjectTag = async () => {
    try {
        const conn = await pool.getConnection();
        const [tags] = await pool.query(getProjectTagName);

        console.log(tags);

        

        conn.release();

        return tags;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getStudyTag = async () => {
    try {
        const conn = await pool.getConnection();
        const [tags] = await pool.query(getStudyTagName);

        console.log(tags);

       

        conn.release();

        return tags;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
export const getHobbyTag = async () => {
    try {
        const conn = await pool.getConnection();
        const [tags] = await pool.query(getHobbyTagName);

        console.log(tags);


        conn.release();

        return tags;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}