const router = require('express-promise-router')();
const {
    getRoomByRoomId,
    addUserToRoom,
    removeUserFromRoom
} = require('./model');

router.get('/:roomId', async (req, res) => {
    const { roomId } = req.params;
    const room = await getRoomByRoomId(roomId);
    if (room) {
        res.json(room.users);
    } else {
        res.status(404).json('Room does not exist');
    }
});

router.post('/:roomId', async (req, res) => {
    const { roomId } = req.params;
    const { user: username } = req.body;
    const room = await getRoomByRoomId(roomId);
    if (!room) {
        res.status(404).json('Room does not exist');
        return;
    }
    if (room.users.find(u => username === u)) {
        res.json({});
        return;
    }
    await addUserToRoom(room.id, username);
    res.status(201).json({});
});

router.put('/:roomId', async (req, res) => {
    const { roomId } = req.params;
    const { user: username } = req.body;
    const room = await getRoomByRoomId(roomId);
    if (!room) {
        res.status(404).json('Room does not exist');
        return;
    }
    if (room.users.find(u => username === u)) {
        res.json({});
        return;
    }
    await addUserToRoom(room.id, username);
    res.status(201).json({});
});

router.delete('/:roomId', async (req, res) => {
    const { roomId } = req.params;
    const { user: username } = req.body;
    const room = await getRoomByRoomId(roomId);
    if (!room) {
        res.status(404).send('Room does not exist');
        return;
    }
    if (!room.users.find(u => username === u)) {
        res.status(404).json('User id is not found');
        return;
    }
    await removeUserFromRoom(roomId, username);
    res.json('USERS_ID leaves the room');
});

module.exports = router;
