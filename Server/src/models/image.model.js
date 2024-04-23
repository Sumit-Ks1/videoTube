import mongoose, { Schema } from 'mongoose';


const imageSchema = new Schema({
    avatar: {
        type: String, // we use cloudinary url
        
    },
    coverImage: {
        type: String,
    },
    ownerOfImage: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });

export const Image = mongoose.model('Image',imageSchema);