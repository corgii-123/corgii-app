const express = require('express')
const data = require('./data')

const app = express()

app.get('/', (req, res) => {
  res.send('server is ready')
})

app.get('/api/product', (req, res) => {
  res.send(data.products)
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('server is ok http://localhost:' + port);
})