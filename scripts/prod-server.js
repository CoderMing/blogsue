const express = require('express')
const path = require('path')

const app = new express()

app.use('/', express.static(path.resolve(__dirname, '../', 'build/')))

app.listen(8080, () => {
  console.log(`Server is running at http://localhost:8080`)
})
