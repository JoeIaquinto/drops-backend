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
  location: {type: String},
  latitude: {type: Number},
  longitude: {type: Number},
  times: Date,
})

var Drop = mongoose.model('drops', DropSchema)

module.exports = Drop
