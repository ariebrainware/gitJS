const express = require('express')
const app = express()

const connection = () => {
    app.get('/', addEndPoint())
    app.listen(3000, () => console.log('Example app listening on port 3000!'))
}

const sendMessage = (msg) => {
    (req, res) => res.send(msg)
}

connection()

// Exporting module
module.exports = sendMessage