const mongoose = require('mongoose');

// const Profiles = mongoose.Schema({name: String})

const Profiles = mongoose.Schema({
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
        "speed": Number
        }
    },

    image: Object,
    friends: [String],
    active: Boolean,
    messages: [ { user: String, message: String } ]

});

module.exports = mongoose.model('Profiles', Profiles);
