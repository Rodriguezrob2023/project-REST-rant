const express = require('express')
const app = express()

app.get('/',(reg, res) => {
res.send('Hello World')
})

app.get('*', (req, res) => {
res.status(404).send('<h1>404 Page</h1>')
})


app.listen(process.env.PORT)

require('dotenv').config()