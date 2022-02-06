const express = require('express')
const fiveLetterPackage = require('@jsinkler713/five-letter-word')

const app = express()

app.get('/five-letter', (req, res) => {
  res.json({word: fiveLetterPackage.getFiveLetterWord()})
})

app.listen(4000, ()=> {
  console.log('listening on port 4000')
});
