import mongoose, { Schema } from "mongoose";

// Define Schemes
const CommentSchema = new Schema({
    seq: Schema.Types.ObjectId,
    writer: {type: String, required: true},
    date: {type: String, required: true},
    profile: String,
    content: {type: String, required: true},
});

const PostSchema = new Schema({
    key: Schema.Types.ObjectId,
    title:{type: String, required: true},
    date: {type: String, required: true},
    writer: {type: String, required: true},
    content: {type: String, required: true},
    likes: Number,
    comments: [CommentSchema], 
});

// Create Model & Export
module.exports = mongoose.model('Post', PostSchema, 'Posts');