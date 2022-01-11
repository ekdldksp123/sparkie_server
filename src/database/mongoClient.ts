const { MongoClient } = require('mongodb');

// TODO 추후 env 로 관리
const MONGO = `sparkie`;
const MONGO_PW = `4321tmvkzl`;
const DB_NAME = `sparkie-temp`;
const uri = `mongodb+srv://${MONGO}:${MONGO_PW}@sparkie-temp.uzycf.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  // const collection = client.db('test').collection('devices');
  // // perform actions on the collection object
  // console.log(collection);
});
