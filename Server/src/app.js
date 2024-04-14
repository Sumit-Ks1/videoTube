import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // It enables crud operation on cookies of user browser .ie. to keep some data by default in user browser for faster access. 
const app = express();

//CORS is essential when your frontend (e.g., a React app) running on one domain needs to make requests to an API (backend) hosted on a different domain. Without CORS, browsers would block these requests due to the same-origin policy. For this , your website is allowed to access data of other backend through API (as the other site , backend engineers have allowed you through CORS origin or whitelistings).
app.use( cors({
    origin: process.env.CORS_ORIGIN, //  This option specifies which origins (domains) are allowed to access your server’s resources. It can be a single origin (e.g., 'https://example.com') or an array of allowed origins.
    Credentials: true //  This option indicates that the server can include credentials (such as cookies or HTTP authentication) in the CORS request.
}))

// middlewares below (works in between client side and server side)
app.use(express.json({limit: "16kb"})); // data sent from a client in JSON format
app.use(express.urlencoded({extended: true, limit: "16kb"})); // form data submitted via HTML forms
app.use(express.static("public")); // It serves static files like style.css or app.js in public folder (Which may be forming another web page)and is based on serve-static.
app.use(cookieParser());

// routes

import userRouter from './routes/user.routes.js'
// app.use() matches all types of requests (GET, POST, etc.). app.get() specifically matches GET requests.
app.use("/api/v1/users", userRouter) // userRouter is an instance of an Express router (likely defined in a separate module or file). It contains specific route handlers for user-related functionality (such as registration, login, profile updates, etc.).


export {app}