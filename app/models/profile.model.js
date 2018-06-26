const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    name: String,
    age: Number,
    location: {
      "timestamp": Number,
      "coords": {
        "accuracy": Number,
        "altitude": Number,
        "altitudeAccuracy": Number,
        "heading": Number,
        "latitude": Number,
        "longitude": Number,
        "speed": Number }
      },
    image: String,
    friends: [String],
    active: Boolean,
    messages: [
      {
         user: String,
         message: String
      }
   ]

});

module.exports = mongoose.model('Profile', ProfileSchema);
