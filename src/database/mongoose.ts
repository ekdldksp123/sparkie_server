import mongoose from "mongoose";

const options = {
    autoIndex: false,
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    maxPoolSize: 7,
    serverSelectionTimeoutMS: 5000, // 5초동안 서버 연결이 되지 않으면 에러 발생
    socketTimeoutMS: 15000, // 15초동안 활동이 없으면 소켓 닫음
}

/** DB connection pool 생성 및 연결 */
module.exports = () => {
    const connect = async () => {
        mongoose.set("debug", true);
        const url:string = process.env.MONGO_URL!;
        await mongoose.connect(url, options)
        .then((db) => console.log('sparkie-temp is connected')
        ).catch((err) => console.log(err));
    }
    connect();
    mongoose.connection.on('disconnected', connect); //연결이 해제될 시에 다시 connect 함수 실행
}








