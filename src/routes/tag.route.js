import express from "express";
import { projectTagInfo,studyTagInfo,hobbyTagInfo } from "../controllers/tag.controller.js";

export const tagRoute = express.Router();

tagRoute.get('/1', projectTagInfo)
tagRoute.get('/2', studyTagInfo)
tagRoute.get('/3', hobbyTagInfo)