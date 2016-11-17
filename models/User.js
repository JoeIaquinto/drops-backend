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
  publicity: Number,
  friends: [{ type: String, ref: 'User' }]
})

UserSchema.virtual('drops_created', {
  ref: 'drops',
  localField: '_id',
  foreignField: 'creator'
})

UserSchema.virtual('drops_guest', {
  ref: 'drops',
  localField: '_id',
  foreignField: 'guests._guest'
})

UserSchema.virtual('feed', {
  ref: 'feed',
  localField: '_id',
  foreignField: 'user'
})

var User = mongoose.model('users', UserSchema)

module.exports = User
