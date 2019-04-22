const { getRoomCollection } = require('../common/db');

const getAllUsers = async () => {
    const roomCollection = await getRoomCollection();
    const users = roomCollection.distinct('users', {});
    return users;
};

module.exports = { getAllUsers };
