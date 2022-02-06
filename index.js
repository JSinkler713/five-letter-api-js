const express = require('express')
const fiveLetterPackage = require('@jsinkler713/five-letter-word')

const app = express()

app.get('/five-letter', async(req, res) => {
  await console.log(fiveLetterPackage.getFiveLetterWord())
})

app.listen(4000, async()=> {
  console.log('listening on port 4000')
});
