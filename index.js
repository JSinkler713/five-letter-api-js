const express = require('express')
const fiveLetterPackage = require('@jsinkler713/five-letter-word')
const  cors = require('cors')

const app = express()
app.use(cors()) // allow all

app.get('/five-letter', (req, res) => {
  res.json({word: fiveLetterPackage.getFiveLetterWord()})
})

app.listen(4000, ()=> {
  console.log('listening on port 4000')
});
