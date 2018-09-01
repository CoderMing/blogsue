const express = require('express')
const path = require('path')

const app = new express()

app.use('/static', express.static(path.resolve(__dirname, '../', 'build/', 'static/')))

app.use('/service-worker.js', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../', 'service-worker.js'))
})
app.use('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../', 'build/', 'index.html'))
})

app.listen(8080, () => {
  console.log(`Server is running at http://localhost:8080`)
})
