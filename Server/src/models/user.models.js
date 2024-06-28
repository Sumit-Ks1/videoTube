import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    // imagesStore: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Image"
    // },
    // avatar: {
    //     type: Schema.Types.ObjectId, // we use cloudinary url
    //     ref: "Image"
    // },
    // coverImage: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Image"
    // },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true })

userSchema.pre("save", async function (next) {  //The pre() function is used to define middleware functions that run before userSchema operations.The hook (or event) on which the middleware should execute (e.g., 'save', 'update', 'findOne', etc.).  A callback function that will be executed before the specified operation.The callback function typically takes the next parameter, which is called when the middleware completes its task.
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password) // compares the again inputed password with already inputed password (hashed one)
}

userSchema.methods.generateAccessToken = function () {  //  JWTs securely transmit information between parties. The signature ensures the sender’s authenticity, and the content remains tamper-proof. Just before transmitting user sensitive data to database ,we have hashed (or encrypted ) it .A token is a piece of data that serves as a form of credentials or proof of identity
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.username,
            fullNmae: this.fullNmae
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () { 
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model('User', userSchema);