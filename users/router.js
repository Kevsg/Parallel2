const router = require('express-promise-router')();

router.get('/users', (req, res) => res.send('Hello World!'))

module.exports = router;