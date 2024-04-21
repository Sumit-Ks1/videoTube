import mongoose, {isValidObjectId} from "mongoose"
import {Video} from "../models/video.models.js"
import {User} from "../models/user.models.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"

const publishVideo = asyncHandler(async (req, res) => {

    const videoLocalPath = req.files?.videoFile[0]?.path
    const videoFile = await uploadOnCloudinary(videoLocalPath)
    const urlvideo= videoFile.url;
    const usertwo = await Video.create({
        videoFile: urlvideo
    })
    console.log(urlvideo)
    return res.status(201).json(
        new ApiResponse(200, urlvideo, "url got successfully")
    )
})

export {publishVideo}