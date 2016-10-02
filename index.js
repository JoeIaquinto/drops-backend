var express = require('express');
var app = express();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Drop = require('./models/Drop');
var User = require('./models/User');
mongoose.connect('mongodb://localhost/drops');

app.get('/drops', function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}]);
});
app.get('/drops/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(3000);
console.log('Listening on port 3000...');