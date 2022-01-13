import mongoose, { Schema } from "mongoose";

// Define Schemes
const CommentSchema = new Schema({
    key: {type: String, required: true},
    writer: {type: String, required: true},
    date: {type: Date, required: true},
    profile: String,
    content: {type: String, required: true},
});

const PostSchema = new Schema({
    key: {type: String, required: true},
    title:{type: String, required: true, trim: true},
    date: {type: Date, required: true},
    writer: {type: String, required: true, trim: true},
    content: {type: String, required: true},
    likes: Number,
    comments: [CommentSchema], 
});

// Create Model & Export
module.exports = {
    Post: mongoose.model('Post', PostSchema, 'Posts'),
    Comment: mongoose.model('Comment', CommentSchema, 'Comments'),
};