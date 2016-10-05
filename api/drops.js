var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Drop = require('../models/Drop');
var User = require('../models/User');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Drop Time: ', Date.now());
  next();
});

// TODO: return all visible drops (for now all of them)
router.get('/',function(req, res) {
  res.send(["hi"]);
});
// TODO: Create new Drop, add to relevant feed, add to creator's Drops
router.post('/'),function(req, res) {
  res.send(["hi"]);
});
// TODO: return all info about a given drop
router.get('/:id', function(req, res) {
  res.send({id:req.params.id, name: "The Name", description: "description"});
});
// TODO: update info about a given drop
router.put('/:id', function(req, res) {
  res.send({id:req.params.id, name: "The Name", description: "description"});
});
// TODO: delete all info about a given drop
router.delete('/:id', function(req, res) {
  res.send({id:req.params.id, name: "The Name", description: "description"});
});
// TODO: Return all visible drops within a radius with geolocations
router.get('/nearby/:radius'function(req, res) {
  res.send({id:req.params.id, name: "The Name", description: "description"});
});

module.exports = router;