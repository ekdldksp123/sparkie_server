import { unwatchFile } from "fs";
import mongoose, {Schema, Document, Model} from "mongoose";

// TODO 추후 env 로 관리
const MONGO = `sparkie`;
const MONGO_PW = `4321tmvkzl`;
const DB_NAME = `sparkie-temp`;
const uri = `mongodb+srv://${MONGO}:${MONGO_PW}@sparkie-temp.uzycf.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const connect = async () => {
    const url = 'mongodb+srv://sparkie:4321tmvkzl@sparkie-temp.uzycf.mongodb.net/sparkie-temp?retryWrites=true&w=majority';
    console.log(url);
    // console.log(`mongo url is ${process.env.MONGO_URL!}`);
    mongoose.set("debug", true);
    await mongoose.connect(url, 
        // {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        //     useFindAndModify: false,
        // }
    ).then((db) => console.log('sparkie-temp is connected')
    ).catch((err) => console.log(err));
}