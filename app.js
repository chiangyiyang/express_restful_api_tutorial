const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


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


app.get('/posts/:id', (req, res) => {
    // res.json(posts)

    let result = posts.filter(e => e.id == req.params.id)
    res.json(result)
})

app.get('/posts', (req, res) => {
    if (typeof req.query.id !== 'undefined') {
        let result = posts.filter(e => e.id == req.query.id)
        res.json(result)
    } else {
        res.json(posts)
    }
})



app.post('/posts', (req, res) => {

    let id = 0

    posts.forEach(e => {
        if (typeof e.id !== 'undefined') {
            if (e.id > id)
                id = e.id
        }

    })

    let data = req.body
    data['id'] = id + 1

    posts.push(data)
    res.send(posts)

});


app.delete('/posts/:id', (req, res) => {
    posts = posts.filter(e => e.id != req.params.id)
    res.json(posts)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})