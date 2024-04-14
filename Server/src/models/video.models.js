import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema({
    videoFile: {
        type: "string", // cloudinary
        required: true
    },
    thumbnail: {
        type: "string",
        required: true
    },
    title: {
        type: "string",
        required: true
    },
    description: {
        type: "string", // cloudinary
        required: true
    },
    duration: {
        type: Number, //cloudinary
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: 0
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
},{timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema);