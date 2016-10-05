var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Drop = require('./models/Drop');
var User = require('./models/User');
mongoose.connect('mongodb://localhost/drops');

var app = express();
var drops = require('./api/drops');
var users = require('./api/users');

app.use(require('body-parser')());
app.use(require('cookie-parser')());

app.use('/drops',drops);
app.use('/users',users);
app.listen(3000);
console.log('Listening on port 3000...');