const router = require('express-promise-router')();

router.get('/allrooms', (req, res) => res.send('Hello World!'))
router.post('/allrooms', (req, res) => res.send('Hello World!'))
router.put('/allrooms', (req, res) => res.send('Hello World!'))
router.delete('/allrooms', (req, res) => res.send('Hello World!'))

module.exports = router;
