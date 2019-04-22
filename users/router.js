const router = require("express-promise-router")();
const { getAllUsers } = require("./model");

router.get("/", async (req, res) => {
    res.json(await getAllUsers());
});

module.exports = router;
