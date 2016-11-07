var mongoose = require('mongoose')
var shortid = require('shortid')
var Schema = mongoose.Schema
// var User = require('./User')
var FeedSchema = new Schema({
  _id: {
    type: String,
    'default': shortid.generate
  },
  drop: {type: String, ref: 'Drop'},
  user: {type: String, ref: 'User'},
  action: String,
  time: Date
})

// FeedSchema.static('findUserFeed', function (user, callback) {
//   User.findOne({'_id': user}).select('name drops')
//   this.find({ $or: [ {'user': user}, {'drop': {$in: }} ] })
// })

var Feed = mongoose.model('feed', FeedSchema)

module.exports = Feed
