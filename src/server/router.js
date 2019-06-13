const express = require('express');
const Rest = require('./models/rest');
const Reviews = require('./models/reviews');

const router = express.Router();

router.get('/test', (req, res) => {
  res.send({ test: 'test' });
});


router.post('/getQuestion', async function (req, res, next) {
  console.log(">>>>>>>>>>>>")
  res.json(rest)
});



module.exports = router;