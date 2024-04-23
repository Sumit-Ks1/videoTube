import { Router } from "express";
import {  imagesUser, loginUser, logoutUser, registerUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage, getUserChannelProfile, getWatchHistory } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {publishVideo } from "../controllers/video.controller.js";

const router = Router();

// When the user goes to register page then it will do below work
router.route("/register").post(
    upload.fields([
        {
            name: "avatar", // as per name in user.models.js
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
);  // The router.route() method creates a new route for a specific path. The .post() method specifies that this route handler will only respond to HTTP POST requests. The registerUser function (or middleware) is the callback that will be executed when an HTTP POST request is made to the “/register” path.
router.route("/register/pathImage").post(imagesUser)
// router.route("/videoPlay").post(
//     upload.fields([
//         {
//             name: "videoFile", // as per name in user.models.js
//             maxCount: 1
//         }
//     ]),
//     publishVideo
// )
router.route("/login").post(loginUser)

// secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)
router.route("/avatar").post(verifyJWT,  updateUserAvatar)
router.route("/cover-Image").post(verifyJWT,  updateUserCoverImage)
router.route("/c/:username").get(verifyJWT, getUserChannelProfile)
router.route("/history").get(verifyJWT, getWatchHistory)

export default router