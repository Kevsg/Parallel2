const { getRoomCollection, getUserCollection } = require('../common/db');

const getRoomByRoomId = async (roomId) => {
    const roomCollection = await getRoomCollection();
    const room = await roomCollection.findOne({ id: roomId });
    return room;
};

const getRoomsByUsername = async (username) => {
    const roomCollection = await getRoomCollection();
    const rooms = await roomCollection.find({ users: { $all: [username] } }, { users: false }).toArray();
    return rooms;
};

const upsertUser = async (username) => {
    const userCollection = await getUserCollection();
    await userCollection.updateOne({ username }, { $set: { username } }, { upsert: true });    
};

const removeUser = async (username) => {
    const userCollection = await getUserCollection();
    await userCollection.findOneAndDelete({ username });
};

const addUserToRoom = async (roomId, username) => {
    const roomCollection = await getRoomCollection();
    await roomCollection.updateOne({ id: roomId }, { $push: { users: username } });
};

const removeUserFromRoom = async (roomId, username) => {
    const roomCollection = await getRoomCollection();
    await roomCollection.updateOne({ id: roomId }, { $pull: { users: username } });
};

module.exports = {
    getRoomByRoomId,
    getRoomsByUsername,
    upsertUser,
    removeUser,
    addUserToRoom,
    removeUserFromRoom
};
