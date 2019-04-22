const express = require('express')
const app = express()
const port = 3000

const { getDb } = require('./common/db');

app.use('/allrooms', require('./allrooms/router'));
app.use('/room', require('./room/router'));
app.use('/user', require('./users/router'));

app.listen(port, () => console.log(`Server listening on port ${port}!`))
