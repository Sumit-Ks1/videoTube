import mongoose, { Schema } from 'mongoose';


const imageSchema = new Schema({
    avatar: {
        type: String, // we use cloudinary url
        required: true,
    },
    coverImage: {
        type: String,
    },
    ownerimage: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true });

export const Image = mongoose.model('Image',imageSchema);