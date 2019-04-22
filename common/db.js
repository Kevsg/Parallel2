const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/myproject';
const dbName = 'parallel2';
const client = new MongoClient(url, { useNewUrlParser: true });

const clientConnectPromise = client.connect();

const getDb = async () => {
    await clientConnectPromise;
    return client.db(dbName);
};

module.exports = { getDb };
