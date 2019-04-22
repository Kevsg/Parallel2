const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { port } = require('./common/config');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/allrooms', require('./allrooms/router'));
app.use('/room', require('./room/router'));
app.use('/user', require('./users/router'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
