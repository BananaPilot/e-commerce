import mongoose, { Schema } from "mongoose";

const commentsSchema = new Schema({
    title: {
        type: String,
        required : true,
    },
    comment:{
        type: String,
        required: true
    }
})

const commentsDB = mongoose.connection.useDb('comments')

const Comments = commentsDB.model.Products || commentsDB.model('comments', commentsSchema)

export default Comments