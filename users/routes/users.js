var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET users listing. */
router.get('/', function (req, res, next) {
  let name = req.query["name"];
  axios.get(`http://localhost:3000/users?name=${name}`).then(result => {
    // return with a custom response and give the message
    console.log(result.data);
    res.send(`You've greeted with this message: ${result.data["message"]}`);
  }).catch(err => {
    // resend the error
    res.send(err);
  })
});

router.post('/gets', (req, res, next) => {
  try {
    axios.get('http://localhost:3000/users/getAll').then((msg) => {
      console.log(msg.data);
      res.send(msg.data)
    }).catch((err) => {
      throw err
    })
  } catch (error) {
    throw error
  }
})

module.exports = router;