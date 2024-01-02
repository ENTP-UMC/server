import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { postProjectSql, connectProjectTag, getTagToProjectID, getStackToProjectID } from "./project.sql.js";

export const postProject = async (data) => {
    try{

        console.log("data is", data);
        const conn = await pool.getConnection();
        
        const result = await pool.query(postProjectSql, [data.user_id, data.name, data.title, data.content, data.status, data.period, data.start_date, data.created_at, data.contact, data.contact_url]);

        conn.release();
        return result[0].insertId;
    
    }catch (err) {
        console.log(err.message);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const setProjectTag = async (project_id, tag_id) => {
    try {
        const conn = await pool.getConnection();
        await pool.query(connectProjectTag, [tag_id, project_id]);
        conn.release();
        return;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getProjectTagToProjectID = async (projectID) => {
    try{
        const conn = await pool.getConnection();
        const tag = await pool.query(getTagToProjectID, projectID);
        conn.release();
        return tag;
    } catch(err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}