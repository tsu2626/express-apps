var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  var lastName = '会員確認のため、お名前を送信してください';
  if(req.session.userName != undefined){
    lastName = "直近の確認者:" +  req.session.userName;
  }
  var data = {
    title: '会員登録情報の確認',
    content: lastName
  }
  res.render('hello', data);
});

router.post('/confirm', (req, res, next) => {
  var lastName = req.body['userName'];
  req.session.userName = lastName;
  var data = {
    title: '登録情報の確認完了！',
    content: "直近の確認者:" +  req.session.userName
  }
  res.render('hello', data);
})

module.exports = router;