const express = require('express')
const app = express()
const port = 3000

app.get('/allrooms', (req, res) => res.send('Hello World!'))
app.post('/allrooms', (req, res) => res.send('Hello World!'))
app.put('/allrooms', (req, res) => res.send('Hello World!'))
app.delete('/allrooms', (req, res) => res.send('Hello World!'))

app.get('/room', (req, res) => res.send('Hello World!'))
app.post('/rooms', (req, res) => res.send('Hello World!'))
app.put('/room', (req, res) => res.send('Hello World!'))
app.delete('/room', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
