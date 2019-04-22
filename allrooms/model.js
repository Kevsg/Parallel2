const { getRoomCollection } = require('../common/db');

const getAllRooms = async () => {
    const roomCollection = await getRoomCollection();
    return roomCollection
        .find({})
        .project({ _id: false, id: true })
        .toArray()
        .then(rooms => rooms.map(room => room.id));
};

const addRoom = async (id) => {
    const roomCollection = await getRoomCollection();
    const rooms = await roomCollection.find({ id }).project({ id: true }).toArray();
    if (rooms.length > 0) {
        return false;
    } else {
        await roomCollection.insertOne({ id, users: [] });
        return true;
    }
};

const removeRoom = async (id) => {
    const roomCollection = await getRoomCollection();
    const rooms = await roomCollection.find({ id }).project({ id: true }).toArray();
    if(rooms.length > 0){
        await roomCollection.findOneAndDelete({ id });
        return true;
    } else {
        return false;
    }
};

module.exports = { getAllRooms, addRoom, removeRoom };
