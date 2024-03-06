const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
}).get('/arbaz', (req, res) => {
    res.send('Hello arbaz!')
}).get('/home', (req, res) => {
    res.send('Hello home!')
}).get('/contact', (req, res) => {
    res.send('Hello contact!')
}).get('/happy', (req, res) => {
    res.send('Hello contact!')
}).get('/happy', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})