const express = require('express')

const app = express()

// PORT
const PORT = 3000 || process.env.PORT

app.get('/', (req, res) => {
  console.log('Hello')
  res.send('Hello Mester Gamal')
})

app.listen(PORT, function () {
  console.log(`the app is running on %s port`, PORT)
})