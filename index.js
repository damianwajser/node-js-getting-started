const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})