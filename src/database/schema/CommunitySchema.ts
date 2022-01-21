import mongoose, { Schema } from "mongoose";

// Define Schemes
const CommentSchema = new Schema({
    post_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    writer: {type: String, required: true},
    date: {type: Date, required: true},
    profile: String,
    content: {type: String, required: true},
});

const PostSchema = new Schema({
    title:{type: String, required: true, trim: true},
    date: {type: Date, required: true},
    writer: {type: String, required: true, trim: true},
    content: {type: String, required: true},
    // likes: {type: Number, default: 0},
    likes: Number,
    comments: [CommentSchema], 
});

// Create Model & Export
module.exports = {
    Post: mongoose.model('Post', PostSchema, 'Posts'),
    Comment: mongoose.model('Comment', CommentSchema, 'Comments'),
};