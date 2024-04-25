import mongoose, { Schema } from 'mongoose';


const imageSchema = new Schema({
    avatar: {
        type: Object, // we use cloudinary url
        required: true,
    },
    coverImage: {
        type: Object,
        required: true,

    },
    ownerImage: {
        type: String,
    }
    
}, { timestamps: true });

export const Image = mongoose.model('Image',imageSchema);