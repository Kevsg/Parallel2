const router = require("express-promise-router")();
const { addRoom, removeRoom, getAllRooms } = require("./model");

router.get("/", async (req, res) => {
    res.json(await getAllRooms());
});

router.post("/", async (req, res) => {
    const id = req.body.id;
    const valid = await addRoom(id);
    if (valid) {
        res.status(201).json({ id });
    } else {
        res.status(404).json(`${id} already exists`);
    }
});

router.put("/", async (req, res) => {
    const id = req.body.id;
    const valid = await addRoom(id);
    if (valid) {
        res.status(201).json({ id });
    } else {
        res.json({ id });
    }
});

router.delete("/",async (req, res) => {
    const id = req.body.id;
    const valid = await removeRoom(id);
    if (valid) {
        res.json(`${id} Is deleted`);
    } else {
        res.status(404).json("Room id is not found");
    }
});

module.exports = router;
