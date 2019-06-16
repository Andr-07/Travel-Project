const express = require('express');
const Tour = require('./models/tour');

const router = express.Router();

router.get('/test', (req, res) => {
  res.send({ test: 'test' });
});


router.post('/oneTour', async (req, res, next) => {
  let saveData = new Tour ({
    userName: req.body.userName,
    tourName: req.body.mapName,
    description: req.body.description,
    allMarks: req.body.allMarks,
    allLines: req.body.allLines
  })

  // await saveData.save();
  console.log(">>>>>>>>>>>>", saveData)
  res.json()
});

router.post('/profile', async (req, res, next) => {
 let check = await Tour.findOne({userName: req.body.userName})
  console.log(">>>>>>>>>>>>", check)
  res.json(check)
});

router.post('/all', async (req, res, next) => {
  let check = await Tour.find({})
   console.log(">>>>>>>>>>>>", check)
   res.json(check)
 });



module.exports = router;