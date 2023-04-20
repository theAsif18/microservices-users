var express = require('express');
var router = express.Router();

const data = [
  {
    name: "abc",
    age: "23"
  },
  {
    name: "xyz",
    age: "30"
  }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  let name = req.query["name"];
  res.send({
    message: `Hello ${name}!`
  });
});

router.get('/getAll', function (req, res, next) {
  try {
    res.send({
      message: `Hello Asif!`,
      data
    });
  } catch (error) {
    throw error
  }
});

module.exports = router;
