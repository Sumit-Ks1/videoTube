// We made this middleware in different file to avoid rewriting of this same code multiple times . For example we are using it for logging out purpose primarily but we may need to check user is authenticated to like the video of the youtube 
// As in this multiiware , we are just authenticating the user.
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

export const verifyJWT = asyncHandler(async (req, _ ,next) => { // underscore(_) after req is nothing but used in place of res because inside our function , we were not using res therefore we typed _ in place of res
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "") // taking encrypted access token from either cookies or from headers.
    
        if(!token) {
            throw new ApiError(401, "unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) //  After verifying the encoded access token key  and real access token key that is inside the .env file as secured key. decodeedToken will contain the decoded access token data (i.e the json payload i.e; the user data passed in jwt.sign in accessToken method inside the user.models.js)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user) {
            throw new ApiError(401, "Invalid access token")
        }
    
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})