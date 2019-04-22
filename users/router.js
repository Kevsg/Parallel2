const router = require('express-promise-router')();
const model = require('./model');

router.get('/', async (req, res) => {
    res.status(200).json(await model.allusers())
})

module.exports = router;
