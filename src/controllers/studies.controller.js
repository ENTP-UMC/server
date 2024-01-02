import { response } from "../../config/response.js"
import { status } from "../../config/response.status.js"

import {
    createStudies,
    viewStudies,
    viewStudiesList,
} from "../services/studies.service.js"

export const studiesCreate = async (req, res, next) => {
    res.send(response(status.SUCCESS, await createStudies(req.body)))
}

export const studiesView = async (req, res, next) => {
    return res.send(
        response(status.SUCCESS, await viewStudies(req.params.studyId))
    )
}

export const studiesListView = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await viewStudiesList(req.body)))
}
