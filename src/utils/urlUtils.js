const express = require('express')
const app = express()
app.use(express.json())

app.listen('8000', () => {
    console.log('Back started on http://localhost:8000')
})

module.exports = { app: app }