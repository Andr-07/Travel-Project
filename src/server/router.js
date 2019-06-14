const express = require('express');
const Tour = require('./models/tour');

const router = express.Router();

router.get('/test', (req, res) => {
  res.send({ test: 'test' });
});


router.post('/oneTour', async (req, res, next) => {
  let saveData = new Tour ({
    userName: 'Katrin',
    tourName: 'Montengero',
    description: 'The best hiking ever',
    allMarks: req.body.allMarks,
    allLines: req.body.allLines
  })

  // await saveData.save();
  console.log(">>>>>>>>>>>>", saveData)
  res.json()
});



module.exports = router;