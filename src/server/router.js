const express = require('express');
const Tour = require('./models/tour');
const User = require('./models/user');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send({ test: 'test' });
});


router.post('/oneTour', async (req, res, next) => {
  let saveData = new Tour({
    userName: 'Katrin',
    tourName: 'Montengero',
    description: 'The best hiking ever',
    allMarks: req.body.allMarks,
    allLines: req.body.allLines
  })

  // await saveData.save();
  // console.log(">>>>>>>>>>>>", saveData)
  res.json()
});

router.post('/reg', async (req, res, next) => {
  let user = new User({
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email
  })

  await user.save();
  console.log(">>>>>>>>>>>>", user)
  res.json('OK')
});

router.post('/login', async (req, res, next) => {
  let allUsers = await User.find()
  for (let i = 0; i < allUsers.length; i++) {
    if (req.body.email === allUsers[i].email && req.body.password === allUsers[i].password) {
      console.log('Успешная авторизация');
      let userName = allUsers[i].userName
      let email = allUsers[i].email
      return res.json({result:'OK',email:email,user:userName})
    }
    else
      console.log('Неуспешная авторизация');
    return res.json('Not OK')
  }
});

module.exports = router;