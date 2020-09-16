var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "Hagay Kassa"
  },
  {
    "id": 2,
    "name": "Simcha Balay"
  },
  {
    "id": 3,
    "name": "yakov avraham"
  },
  {
    "id": 4,
    "name": "zion tamano"
  }
  
];
  res.send(users);
});

module.exports = router;
