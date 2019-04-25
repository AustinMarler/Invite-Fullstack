var express = require('express');
var router = express.Router();

let going = []
let notGoing = []

router.get('/', function(req, res, next) {
  res.json({
    goingCount: going.length,
    notGoingCount: notGoing.length
  })
});

router.get('/going', function(req, res, next) {
  res.json(going)
})

router.get('/notgoing', function(req, res, next) {
  res.json(notGoing)
})

router.post('/going', function(req, res, next) {
  going.push(req.body)
  res.json({
    message: "added person going"
  })
})

router.post('/notgoing', function(req, res, next) {
  notGoing.push(req.body)
  res.json({
    message: "added person not going"
  })
})

module.exports = router;