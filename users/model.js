const db = require('../common/db');

async function allusers(){
    const user = await db.getUserCollection();
    return user.find({}).toArray();
}

module.exports = {allusers};