const express = require('express')

const app = express()

app.get('/', async (req, res) => {

  res.status(200).send('Hello From the Starter App')
})

app.listen(6000 || process.env.PORT, () => {
  console.log(`the app is running on %s port`, 6000)
})