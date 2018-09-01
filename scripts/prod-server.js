const express = require('express')
const path = require('path')

const app = new express()

app.use('/static', express.static(path.resolve(__dirname, '../', 'build/', 'static/')))

app.get(/\/(service-worker\.js|favicon\.ico|manifest\.json|asset-manifest\.json)$/, (req, res) => {
  console.log(req.params)
  res.status(200).sendFile(path.resolve(__dirname, '../', 'build/', req.params[0]))
})

app.use('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../', 'build/', 'index.html'))
})

app.listen(8080, () => {
  console.log(`Server is running at http://localhost:8080`)
})
