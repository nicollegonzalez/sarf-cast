
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  password: String,
  stanceInput: String,
  favoriteSurfSpotInput: String,
  favoriteSurfBoardShapeInput: String,
  favoriteSurferInput: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;