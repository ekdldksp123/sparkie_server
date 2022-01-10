import mongoose, {Schema, Document, Model} from "mongoose";

const options = {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    maxPoolSize: 5, 
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 15000, // Close sockets after 45 seconds of inactivity
}

export const connect = async () => {
    mongoose.set("debug", true);
    const url:string = process.env.MONGO_URL!;
    await mongoose.connect(url, options)
    .then((db) => console.log('sparkie-temp is connected')
    ).catch((err) => console.log(err));
}

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

const model = mongoose.model('Post', PostSchema);






