import mongoose, {Schema, Document, Model} from "mongoose";

const options = {
    autoIndex: false,
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE, //계속 재접속 시도
    reconnectInterval: 500,
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    maxPoolSize: 7,
    serverSelectionTimeoutMS: 5000, // 5초동안 서버 연결이 되지 않으면 에러 발생
    socketTimeoutMS: 15000, // 15초동안 활동이 없으면 소켓 닫음
    //bufferMaxEntries: 0, //연결되지 않은 경우 재연결 기다리지 않고 즉시 오류 반환
}

module.exports = () => {
    const connect = async () => {
        console.log('connect() is being executed when server is loaded');
        mongoose.set("debug", true);
        const url:string = process.env.MONGO_URL!;
        await mongoose.connect(url, options)
        .then((db) => console.log('sparkie-temp is connected')
        ).catch((err) => console.log(err));
    }
    connect();
    mongoose.connection.on('disconnected', connect); //연결이 해제될 시에 다시 connect 함수 실행
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

// Create Model & Export
module.exports = mongoose.model('Post', PostSchema);






