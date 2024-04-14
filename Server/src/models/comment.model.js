import mongoose, { Schema, mongo } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentschema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video",
        }
        ,
        owner: {
            type: Schema.Types.ObjectId,
            ref: "Video",
        }
    }
)


commentschema.plugin(mongooseAggregatePaginate)


export const Comment = mongoose.model("Comment", commentschema)