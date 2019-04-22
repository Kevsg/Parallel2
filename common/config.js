require("dotenv").config();

const mongoConfig = {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/parallel2",
    dbName: process.env.MONGO_DBNAME || "parallel2"
};

const port = process.env.PORT || 3000;

module.exports = { mongoConfig, port };
