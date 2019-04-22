const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/parallel2';
const dbName = 'parallel2';
const client = new MongoClient(url, { useNewUrlParser: true });

const clientConnectPromise = client.connect();

const getDb = async () => {
    await clientConnectPromise;
    return client.db(dbName);
};

const getRoomCollection = async () => {
    const db = await getDb();
    return db.collection('Room');
}

module.exports = { getDb, getRoomCollection };
