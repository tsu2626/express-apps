var express = require('express');
var router = express.Router();

var data = [
  {name: 'Taro', age: 20, mail: 'taro@gmail.com' },
  {name: 'Emi', age: 23, mail: 'emi@gmail.com' },
  {name: 'Kazu', age: 24, mail: 'emi@gmail.com' }
];

router.get('/', (req, res, next) => {
  var n = req.query.id;
  res.json(data[n]);
});

module.exports = router;