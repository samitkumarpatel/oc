const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})

// Constants
const PORT = 3000 | process.env.SERVER_PORT;
const HOST = '0.0.0.0';

app.listen(PORT, () => {
  console.log(`gui app listening at http://${HOST}:${PORT}`)
})