import { BaseError } from "../../config/error.js"
import { status } from "../../config/response.status.js"
import { addStudiesResponseDTO } from "../dtos/studies.response.dto.js"
import {
    addStudies,
    getStudies,
    getStudiesTag,
    setStudyTag,
    setUserInStudy,
} from "../models/studies.dao.js"

export const createStudies = async (body) => {
    const createdDate = new Date()
    const userId = body.user_id

    const addStudiesData = await addStudies({
        user_id: userId,
        title: body.title,
        content: body.content,
        period: body.period,
        start_date: body.start_date,
        total_num: body.total_num,
        in_num: 0,
        status: 0,
        place: body.place,
        contact: body.contact,
        contact_url: body.content_url,
        created_at: createdDate,
    })

    if (addStudiesData == -1) {
        throw new BaseError(status.BAD_REQUEST)
    } else {
        const taglist = body.tags
        for (let i = 0; i < taglist.length; i++) {
            await setStudyTag(addStudiesData, taglist[i])
        }

        await setUserInStudy(addStudiesData, userId)

        return addStudiesResponseDTO(addStudiesData)
    }
}

export const viewStudies = async (studyId) => {
    const getStudiesData = await getStudies(studyId)
    const getStudiesTagData = await getStudiesTag(studyId)

    console.log(getStudiesTagData)
    console.log(getStudiesData)

    let howToMeet = "온라인"
    if (getStudiesData.place == 1) {
        howToMeet = "오프라인"
    }

    const tagList = []

    getStudiesTagData.forEach((item) => {
        tagList.push({ id: item.id, tag_name: item.tag_name })
    })

    if (getStudiesTagData == -1 || getStudiesData == -1) {
        console.log("-1이에요")
        throw new BaseError(status.BAD_REQUEST)
    } else {
        const studyValue = getStudiesData[0]
        const returnValue = {
            study_id: studyValue.id,
            user_id: studyValue.user_id,
            nickname: studyValue.nickname,
            title: studyValue.title,
            content: studyValue.content,
            period: studyValue.period,
            start_date: studyValue.start_date,
            tags: tagList,
            total_num: studyValue.total_num,
            place: howToMeet,
            contact: studyValue.contact,
            contact_url: studyValue.contact_url,
        }
        console.log(returnValue)
        return returnValue
    }
}
