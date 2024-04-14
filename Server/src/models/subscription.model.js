import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subsciber: {
        type: Schema.Types.ObjectId, // One who is subscribing
        ref: "USER"
    },
    channel: {
        type: Schema.Types.ObjectId, // One to whom subscriber is subscribing
        ref: "User"
    }
}, {timestamps: true});



export const Subscription = mongoose.model("Subscription", subscriptionSchema)