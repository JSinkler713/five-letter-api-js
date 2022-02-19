const express = require("express");
const fiveLetterPackage = require("@jsinkler713/five-letter-word");
const cors = require("cors");
var bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors()); // allow all
app.use(bodyParser.json());

app.get("/five-letter", (req, res) => {
  res.json({ word: fiveLetterPackage.getFiveLetterWord() });
});

app.post("/check-is-word", (req, res) => {
  res.json(fiveLetterPackage.checkForWord(req.body.word));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
