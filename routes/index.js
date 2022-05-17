var express = require('express');
var router = express.Router();
var messages = [
  {
    title: 'Oni-chan',
    text: "NO BAKAAAA",
    username: "Imouto-chan",
    date: new Date()
  },
  
  {
    title: 'Senpai',
    text: "Notice meeeeeeee!",
    username: "Kawaii kouhai",
    date: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});
router.get('/new', function(req, res, next) {
  res.render('new', { title: "Mini Messageboard" });
});
router.post('/new', function(req, res, next) {
  messages.push(  {
    title: req.body.title,
    text: req.body.text,
    username: req.body.username,
    date: new Date()
  });
  
  res.render('index', { title: "Mini Messageboard", messages: messages });
});
module.exports = router;
