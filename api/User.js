var express = require('express')
var router = express.Router()
// var mongoose = require('mongoose')
// var Schema = mongoose.Schema
// var Drop = require('../models/Drop')
var User = require('../models/User')

// GET /me Return User's profile information

router.get('/me', function (req, res) {
  User.findOne({'fb_id': req.params.UserID}, function (err, found) {
    if (err) return err
    console.log(found)
    res.send(found)
  })
  res.send(req.params)
})

router.get('/feed', function (req, res) {
  console.log(req.query.UserID)
  User.findOne({'fb_id': req.query.UserID})
  .populate({
    path: 'drops',
    select: 'feed'
  })
  .select('drops feed')
  .exec(function (err, feedItems) {
    if (err) return err
    console.log('User ' + req.query.UserID + ' Feed:\n' + JSON.stringify(feedItems))
    res.send(feedItems)
  })
})

module.exports = router
