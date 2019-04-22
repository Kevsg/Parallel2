const db = require('../common/db');
async function allrooms(){
    const room = await db.getRoomCollection();
    return room.find({}).toArray();
}

async function addRoom(id){
    const room = await db.getRoomCollection();
    var query = await room.find({'id':id}).toArray();
    if(query.length > 0){
        return false;
    }
    else{
        await room.insertOne({'id':id});
        return true;
    }
}

async function removeRoom(id){
    const room = await db.getRoomCollection();
    var query = await room.find({'id':id}).toArray();
    console.log(query);
    console.log(query.length);
    if(query.length > 0){
        await room.findOneAndDelete({'id':id});
        return true;
    }
    else{
        return false;
    }
}

module.exports = {allrooms,addRoom,removeRoom};