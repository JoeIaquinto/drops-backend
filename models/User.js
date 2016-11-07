var mongoose = require('mongoose')
var Schema = mongoose.Schema
var shortid = require('shortid')

var UserSchema = new Schema({
  _id: {
    type: String,
    'default': shortid.generate
  },
  fb_id: String,
  auth: {
    fb_token: String,
    expires: Date
  },
  name: String,
  friends: [{ type: String, ref: 'User' }]
})

UserSchema.virtual('drops', {
  ref: 'drops',
  localField: '_id',
  foreignField: 'creator'
})

UserSchema.virtual('feed', {
  ref: 'feed',
  localField: '_id',
  foreignField: 'user'
})

var User = mongoose.model('users', UserSchema)

module.exports = User
