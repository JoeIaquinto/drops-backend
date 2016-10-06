var mongoose = require('mongoose');

require('dotenv').load();

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  fb_id:String,
  expires:Date,
  name: String,
  friends: [String],
  drops:[Object]
});


var User = mongoose.model('User', UserSchema);

module.exports = User;
