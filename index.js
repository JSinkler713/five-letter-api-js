const express = require('express')
const fiveLetterPackage = require('@jsinkler713/five-letter-word')
const  cors = require('cors')
var bodyParser = require('body-parser')


const app = express()
app.use(cors()) // allow all
app.use(bodyParser.json())

app.get('/five-letter', (req, res) => {
  res.json({word: fiveLetterPackage.getFiveLetterWord()})
})

app.post('/check-is-word', (req, res) => {
  console.log(req.body)
  res.json(fiveLetterPackage.checkForWord(req.body.word))
})

app.listen(4000, ()=> {
  console.log('listening on port 4000')
});
