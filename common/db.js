const MongoClient = require("mongodb").MongoClient;
const { dbName, url } = require("./config").mongoConfig;

const client = new MongoClient(url, { useNewUrlParser: true });

const clientConnectPromise = client.connect();

const getDb = async () => {
    await clientConnectPromise;
    return client.db(dbName);
};

const getRoomCollection = async () => {
    const db = await getDb();
    return db.collection("Room");
};

module.exports = { getDb, getRoomCollection };
