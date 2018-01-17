const express = require('express')
const app = express()
const port = 3010

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server started  on http://localhost:${port}`)
})