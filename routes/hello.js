var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  var data = {
    title: '会員登録情報の確認',
    content: '会員確認のため、お名前をご記入ください'
  }
  res.render('hello', data);
});

router.post('/confirm', (req, res, next) => {
  var name = req.body['userName'];
  var data = {
    title: '登録情報の確認完了！',
    content: name + 'さんの会員登録情報が確認できました。'
  }
  res.render('hello', data);
})

module.exports = router;