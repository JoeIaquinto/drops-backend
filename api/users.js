var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Drop = require('../models/Drop');
var User = require('../models/User');

//POST	/api/Users???	Add a new user after Facebook logs in, Reprompt after token expires, use Exponent FB login
router.post('/', function(req, res){
  res.send('rootpost');
});

//GET	/api/Users/Friends	Returns all friends
router.get('/friends/:UserID', function(req, res){
  var query = Drop.findOne(req.params.UserID);
  query.select(friends);
  query.exec(function(err, drop){
    if(err) return err;
    console.log(drop);
  });
  res.send(['1','2','3']);
})

//GET	/api/Users/:UserID	Return User's profile information
router.get('/:UserID', function(req, res){
  Drops.findOne({ 'fb_id': req.params.UserID }, function(err, found){
    if(err) return err;
    console.log(found);
    res.send(found);
  });
  res.send(req.params);
});
//GET	/api/Users/?Name	Return search results for query of names of visible users
router.get('/?:name', function(req, res){
  res.send('name');
});

module.exports = router;
