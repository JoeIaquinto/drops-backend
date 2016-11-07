var express = require('express')
var router = express.Router()
// var mongoose = require('mongoose')
// var Schema = mongoose.Schema
// var Drop = require('../models/Drop')
// var User = require('../models/User')
// var Feed = require('../models/Feed')

// GET /me Return User's profile information

// router.get('/mine', function (req, res) {
//   var toAggregate = []
//   User.findOne({id: req.params.id}).populate({
//     path: 'drops',
//     select: 'name feed guests',
//     populate: {path: 'feed guests'}
//   })
//   res.send(req.params)
// })

module.exports = router
