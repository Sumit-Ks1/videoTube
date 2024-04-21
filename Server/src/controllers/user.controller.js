import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import {Image} from "../models/image.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import Jwt from "jsonwebtoken";
// 2 3
const generateAccessAndRefreshToken = async (userId) => {
    try {

        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "Something went wrong!! while generating refresh and access token")
    }
}
 
const registerUser = asyncHandler(async (req, res) => {
    // get user detail from frontend
    // validation - not empty string or input
    // check if user already exists : username , email
    // check for images, check and avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res
    const { fullName, email, username, password } = req.body// req.body sees for the data coming from form or json
    

    // validation - not empty string or input
    if ([fullName, email, username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    // check if user already exists : username , email
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    console.log(email);
    if (existedUser) {
        throw new ApiError(409, "User already exists")
    }
    console.log(username);
    // check for images, check for avatar
    // imageUser content was here before
    // create user object - create entry in db and therefore data in it will be available to the user
    const user = await User.create({
        fullName,
        // avatar: avatar.url,
        // coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })
    console.log(email);
    // remove password and refresh token field from response
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }
    // console.log(req.params);
    // console.log(req.query);
    // console.log(req.body);
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Sucessfully")
    )

})

const imagesUser = asyncHandler(async (req,res) => {
    const {avatar,coverImage} = req.body;
    return res.status(200).json(
        new ApiResponse(200,{avatar,coverImage},"Image path taken sucessfully")
    )
})

const loginUser = asyncHandler(async (req, res) => {
    // req body for data
    // useerrname or email
    // find the user
    // password check
    // generate acess and refresh token
    // send cookie

    const { email, username, password } = req.body

    if (!username && !email) {
        throw new ApiError(400, "Username or email is required")
    }

    const user = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (!user) {
        throw new ApiError(400, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Password incorrect")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken"
    ) // Here we querry the database again to get the updated user object that is to passed or shown to client side , becos when we were querrying database at line 111 , we were getting empty refreshToken as we are calling filled refreshToken at line 125 .

    const options = {
        httpOnly: true,
        secure: true // Cookies can be modified in server only and not in client side(Which was by default)

    }
    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refeshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                },
                "User logged in successfully"
            )
        )
})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true, // Due to this line of code , we get updated information
        }
    )

    const options = {
        httpOnly: true,
        secure: true // Cookies can be modified in server only and not in client side(Which was by default)
    }

    return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refeshToken", options)
        .json(
            new ApiResponse(
                200,
                {
                },
                "User logged out successfully"
            )
        )

})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incommingRefreshToken = req.cookies.refreshToken || req.body.refreshToken // taking encrypted refresh token from either cookies or from body.

    if (!incommingRefreshToken) {
        throw new ApiError(401, "Unauthorized request")
    }

    try {
        const decodedToken = Jwt.verify(incommingRefreshToken, process.env.REFRESH_TOKEN_SECRET) // After verifying the encoded refresh token and real refersh token that is inside the .env file as secured key. decodeedToken will contain the decoded refresh token data (i.e the json payload i.e; the user data passed in jwt.sign in refeshToken method inside the user.models.js) 

        const user = await User.findById(decodedToken?._id)

        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }

        if (incommingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired")
        }

        const options = {
            httpOnly: true,  // httpOnly: true ensures that the cookie is only sent to the server and not accessible via JavaScript (client-side scripts), which helps prevent cross-site scripting (XSS) attacks.
            secure: true
        }

        const { accessToken, newrefreshToken } = await generateAccessAndRefreshToken(user._id)

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newrefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    { accessToken, refreshToken: newrefreshToken },
                    "Acess token refreshed"
                )
            )
    } catch (error) {
        throw new ApiError(401, error?.message ||
            "Can not refresh Token. Its invalid")
    }

})

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body // got from user(client side) input

    const user = await User.findById(req.user?._id) // requesting user i.e the object of User mdel to give its id , if it has. So the user which is declared as const is in the scope of changeCurrentPassword method aand user which is after the req. is of the User model
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)
    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password")
    }

    user.password = newPassword
    await user.save({ validateBeforeSave: false })

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Password changed successfully"))

})

const getCurrentUser = asyncHandler(async (req, res) => {
    return res.status(200)
        .json(new ApiResponse(200, req.user, "Current user fetched successfully"))
})

const updateAccountDetails = asyncHandler(async (req, res) => {
    const { fullName, email } = req.body

    if (!fullName || !email) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullName, // it is nothing but same as fullName: fullName
                email: email
            }
        },
        { new: true } // Due to this line of code , user get updated information. { new: true } is an option that specifies that the method should return the updated document. Without this option, the method would return the original document before the update.
    ).select("-password")

    return res
        .status(200)
        .json(new ApiResponse(200, user, "Account updated successfully"))
});

const updateUserAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is missing")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar.url) {
        throw new ApiError(400, "Error while uploading on avatar")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                avatar: avatar.url
            }
        },
        { new: true }
    ).select("-password")

    return res.status(200)
        .json(
            new ApiResponse(200, user, "Avatar is updated successfully")
        )
});

const updateUserCoverImage = asyncHandler(async (req, res) => {
    const coverImageLocalPath = req.file?.path
    if (!coverImageLocalPath) {
        throw new ApiError(400, "cover image file is missing")
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!coverImage.url) {
        throw new ApiError(400, "Error while uploading on cover image")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                coverImage: coverImage.url
            }
        },
        { new: true }
    ).select("-password")

    return res.status(200)
        .json(
            new ApiResponse(200, user, "Cover Image is updated successfully")
        )
});

const getUserChannelProfile = asyncHandler(async (req, res) => {
    const { username } = req.params

    if (!username?.trim()) {
        throw new ApiError(400, "Username is missing")
    }

    const channel = await User.aggregate([
        {
            $match: {
                username: username?.toLowerCase()
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "subscriber",
                as: "subsribedTo"
            }
        },
        {
            $addFields: {
                subscribersCount: {
                    $size: "$subscribers"
                },
                channelsSubscribedToCount: {
                    $size: "$subscribedTo"
                },
                isSubscribed: {
                    // $cond is a conditional operator that allows you to specify an if-then-else condition.
                    $cond: {  //if: This is the condition to evaluate. If this condition is true, the $cond operator will return the value specified in the then field; otherwise, it will return the value specified in the else field.
                        if: { $in: [req.user?._id, "$subscribers.subscriber"] }, // $in: This is an operator that checks if a value is in an array or object. "$subsribers.subscriber": This is the path to the field in the documents being aggregated. It’s prefixed with a dollar sign to indicate that it’s a field path.
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $project: {
                fullName: 1,
                username: 1,
                subscribersCount: 1,
                channelsSubscribedToCount: 1,
                isSubscribed: 1,
                avatar: 1,
                coverImage: 1,
                email: 1
            }
        }
    ])

    if (!channel?.length) {
        throw new ApiError(404, "channel does not exists")
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, channel[0], "User channel fetched successfully.")
        )
})

const getWatchHistory = asyncHandler(async (req, res) => {
    const user = await User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup: {
                from: "videos",
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                pipeline: [
                    {
                        $lookup: {
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline: {
                                $project: {
                                    fullName: 1,
                                    username: 1,
                                    avatar: 1,

                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            owner: {
                                $first: "$owner"
                            }
                        }
                    }
                ]
            }
        }
    ])

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            user[0].watchHistory ,
            "Watch History fetched successfully"
        )
    )
})

export { registerUser, imagesUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage, getUserChannelProfile, getWatchHistory}