import express from "express";
import asyncHandler from 'express-async-handler';

import { projectPost, projectGet } from "../controllers/project.controller.js";

export const projectRouter = express.Router();
projectRouter.post('/', asyncHandler(projectPost));
// projectRouter.get('/', asyncHandler(projectGet));