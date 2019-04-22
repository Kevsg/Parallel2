const { getRoomCollection } = require("../common/db");

const getRoomByRoomId = async (roomId) => {
    const roomCollection = await getRoomCollection();
    const room = await roomCollection.findOne({ id: roomId });
    return room;
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
    addUserToRoom,
    removeUserFromRoom
};
