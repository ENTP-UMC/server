import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertHobbySql,insertHobbyTagSql,HobbySearch,HobbyRecent,HobbyLikes,insertScrapSql } from "./hobby.sql.js";


//user data 추가
export const addHobby = async (data) => {
    try{
       console.log("data:",data);
        const conn = await pool.getConnection();
                   
        const result = await pool.query(insertHobbySql, [data.title, data.content, data.total_num,data.in_num, data.status, data.start_date, data.end_date,data.created_at,data.user_id]);
        conn.release();
        console.log("id",result[0].insertId)

        const conn_s = await pool.getConnection();
        const resultTag = await pool.query(insertHobbyTagSql,[data.tag,result[0].insertId]);
        conn_s.release();
        return result[0].insertId;
        
    }catch (err) {
        console.error(err); // 실제 오류 내용을 콘솔에 출력해 디버깅에 도움을 줄 수 있습니다.
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
export const addScrap = async (data) => {
    try{
       console.log("data:",data);
        const conn = await pool.getConnection();
                   
        const result = await pool.query(insertScrapSql, [data.user_id, data.hobby_group_id]);
        conn.release();
        console.log("id",result[0].insertId)


        return result[0].insertId;
        
    }catch (err) {
        console.error(err); // 실제 오류 내용을 콘솔에 출력해 디버깅에 도움을 줄 수 있습니다.
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}


export const getHobbyRecent = async () => {
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(HobbyRecent);

        console.log(user);

      
        conn.release();

        return user;
        
    } catch (err) {
        console.error(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
export const getHobbyLikes = async () => {
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(HobbyLikes);

        console.log(user);

       
        conn.release();

        return user;
        
    } catch (err) {
        console.error(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
export const getHobbySearch = async (data) => {
    try {
        const conn = await pool.getConnection();
        const searchTerm = '%'+data.keyword+'%';
        const [user] = await pool.query(HobbySearch,[searchTerm,searchTerm]);

        console.log(user);

       

        conn.release();

        return user;
        
    } catch (err) {
        console.error(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
