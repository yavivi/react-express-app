var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "John Doe"
  },
  {
    "id": 2,
    "name": "Jane Doe"
  },
  {
    "id": 77,
    "name": "yaron avraham"
  },{
    "id": 88,
    "name": "Gilad Barhani"
  },
  {
    "id": 3,
    "name": "Lior Mangisto"
  }, {
    "id": 5,
    "name": "Freedom"
  },
  {
    "id": 6,
  "name": "emeye endalwo"
  },
  {
    "id": 7,
<<<<<<< HEAD
  "name": "genet endalwo"
  },
=======
    "name": "Nimrod"
  }
>>>>>>> 0a13e19c3f4b9ee697fac9b9f388bb2f76788ab6
];
  res.send(users);
});

module.exports = router;
