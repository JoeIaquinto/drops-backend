var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dropSchema = new Schema({
  name: String,
  description: String,
  locations:[
    {
      name: String,
      placesKey: String,
      voters: [Object]
    }
  ],
  times:[
    {
      startdate: Date,
      enddate: Date,
      voters: [Object]
    }
  ],
  guests:[
    {
      user_id: String,
      permisions: String,
      visibility: String,
      actions: [
        {
          act: String,
          time: Date
        }
      ]
    }
  ],
  comments: [{id: String, body: String, date: Date }]
});

module.exports = 'Drop';