import { pool } from "../../config/db.config.js"
import { BaseError } from "../../config/error.js"
import { status } from "../../config/response.status.js"

import {
    insertStudiesSql,
    insertStudyTag,
    selectStudies,
    selectStudyTag,
} from "./studies.sql.js"

export const addStudies = async (data) => {
    try {
        const conn = await pool.getConnection()

        const result = await pool.query(insertStudiesSql, [
            data.user_id,
            data.title,
            data.content,
            data.period,
            data.start_date,
            data.total_num,
            data.in_num,
            data.status,
            data.place,
            data.contact,
            data.contact_url,
            data.created_at,
        ])

        conn.release()
        return result[0].insertId
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}

export const setStudyTag = async (studyId, tagId) => {
    try {
        const conn = await pool.getConnection()
        const result = await pool.query(insertStudyTag, [studyId, tagId])

        conn.release()

        return result
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}

export const setUserInStudy = async (studyId, userId) => {
    try {
        const conn = await pool.getConnection()
        const result = await pool.query(insertStudyTag, [studyId, userId, 1])

        conn.release()

        return result
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}

export const getStudies = async (studyId) => {
    try {
        const conn = await pool.getConnection()
        console.log(studyId)
        const [study] = await pool.query(selectStudies, studyId)

        if (study.length == 0) {
            return -1
        }

        conn.release()
        return study
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}

export const getStudiesTag = async (studyId) => {
    try {
        const conn = await pool.getConnection()

        const [studyTags] = await pool.query(selectStudyTag, studyId)

        if (studyTags.length == 0) {
            return -1
        }

        conn.release()
        return studyTags
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}
