const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello Arbaz Ansari This is your home page')
})

app.get('/about/:slug/:second', (req, res) => {
    // console.log(req)
    console.log(req.params)
    res.send(`hello ${req.params.slug} and ${req.params.second}`)
    console.log(req.query)
})

// app.get('/contact', (req, res) => {
//     res.send('Hello Arbaz Ansari This is your contact page')
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})