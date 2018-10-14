var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  var lastName = '会員確認のため、お名前をご記入ください';
  if(req.sesssion.useName != undifined){
    lastName = "直近の確認者:" +  req.session.userName;
  }
  var data = {
    title1: '会員登録情報の確認',
    content: lastName
  }
  res.render('hello', data);
});

router.post('/confirm', (req, res, next) => {
  var name = req.body['userName'];
  var data = {
    title: '登録情報の確認完了！',
    content: "直近の確認者:" +  req.session.userName
  }
  res.render('hello', data);
})

module.exports = router;