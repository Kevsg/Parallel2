const router = require('express-promise-router')();

router.get('/room', (req, res) => res.send('Hello World!'))
router.post('/rooms', (req, res) => res.send('Hello World!'))
router.put('/room', (req, res) => res.send('Hello World!'))
router.delete('/room', (req, res) => res.send('Hello World!'))

module.exports = router;