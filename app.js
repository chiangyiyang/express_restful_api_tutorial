const express = require('express')
const app = express()
const port = 3000

let posts = [
    {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
    },
    {
        "id": 2,
        "title": "json-server is easy!!",
        "author": "typicode"
    },
    {
        "id": 3,
        "title": "json-server is fun!!",
        "author": "typicode"
    }
]

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    res.json({ message: "Hello World!" })
})

app.post('/', function (req, res) {
    res.send('Got a POST request');
})

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.get('/posts/:id', (req, res) => {
    // res.json(posts)

    let result = posts.filter(e => e.id == req.params.id)
    res.json(result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})