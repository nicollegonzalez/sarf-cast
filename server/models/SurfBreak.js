const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const surfBreakSchema = new Schema({
  spot_name: String,
  county_name: String,
  latitude: Number,
  longitude: Number,
  spot_id: Number,
  // forecast:  {
  //   type: [{ type: Schema.Types.ObjectId, ref: 'Forecast' }]
  // }, //I think I will just update directly into the property
  forecast: Array,
  image: Array,
  followers: {
    type: [{ type: Schema.Types.ObjectId, ref: 'SurfBreak' }]
  }, 

  // tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  
});

const SurfBreak = mongoose.model('SurfBreak', surfBreakSchema);

module.exports = SurfBreak;