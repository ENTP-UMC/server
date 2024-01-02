import express from "express"
import asyncHandler from "express-async-handler"

import {
    studiesCreate,
    studiesListView,
    studiesView,
} from "../controllers/studies.controller.js"

export const studiesRoute = express.Router()

studiesRoute.post("/", asyncHandler(studiesCreate))

studiesRoute.get("/:studyId", asyncHandler(studiesView))
studiesRoute.get("/", asyncHandler(studiesListView))
