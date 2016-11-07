var mongoose = require('mongoose')
var shortid = require('shortid')
var Schema = mongoose.Schema
var DropSchema = new Schema({
  _id: {
    type: String,
    'default': shortid.generate
  },
  name: {
    type: String,
    minlength: [3, 'Too short'],
    maxlength: [50, 'Too Long'],
    required: [true, 'Name required']
  },
  description: {type: String, default: ''},
  locations: [
    {
      name: {type: String, default: ''},
      placesKey: {type: String, default: ''},
      loc: {
        type: {type: String},
        coordinates: []
      },
      voters: [{type: String, ref: 'User'}]
    }
  ],
  times: [
    {
      startdate: Date,
      enddate: Date,
      voters: [{type: String, ref: 'User'}]
    }
  ],
  creator: {type: String, ref: 'User'},
  guests: [
    {
      _guest: {type: String, ref: 'User'},
      permisions: {type: String, default: 'Guest'},
      visibility: {type: String, default: 'Friends'}
    }
  ],
  comments: [{_guest: {type: String, ref: 'User'}, body: String, date: Date}]
})

DropSchema.virtual('feed', {
  ref: 'feed',
  localField: '_id',
  foreignField: 'drop'
})

var Drop = mongoose.model('drops', DropSchema)

module.exports = Drop
