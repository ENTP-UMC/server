import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertUserSql } from "./user.sql.js";


//user data 추가
export const addUser = async (data) => {
    try{
       console.log("data:",data);
        const conn = await pool.getConnection();

        const result = await pool.query(insertUserSql, [data.id, data.nickname, data.school, data.phone,data.id, data.nickname, data.school, data.phone]);

        conn.release();
        return result.insertId;
        
    }catch (err) {
        console.error(err); // 실제 오류 내용을 콘솔에 출력해 디버깅에 도움을 줄 수 있습니다.
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
// export const getUser = async (userId) => {
//     try {
//         const conn = await pool.getConnection();
//         const [user] = await pool.query(getUserID, userId);

//         console.log(user);

//         if(user.length == 0){
//             return -1;
//         }

//         conn.release();
//         return user;
        
//     } catch (err) {
//         throw new BaseError(status.PARAMETER_IS_WRONG);
//     }
// }

