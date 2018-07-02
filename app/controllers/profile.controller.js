const Profile = require("../models/profile.model.js")
require("dotenv").config()
const uri = process.env.MONGODB_URI
// Create and Save a new Profile
// exports.create = (req, res) => {
//   // Validate request
//   if(!req.body.content) {
//       return res.status(400).send({
//           message: "Field can not be empty"
//       });
//   }
//
//   // Create a Profile
//   const prof = new Profile({
//       name: req.body.name,
//       age: req.body.age,
//       location: {
//         "timestamp": req.body.timestamp
//         "coords": {
//           "accuracy": req.body.accuracy,
//           "altitude": req.body.altitude,
//           "altitudeAccuracy": req.body.altitudeAccuracy,
//           "heading": req.body.heading,
//           "latitude": req.body.latitude,
//           "longitude": req.body.longitude,
//           "speed": req.body.speed }
//         },
//         "image": req.body.image,
//         "friends": [],
//         "active": true,
//         "messages": [
//           {
//             "user": "",
//             "message": ""
//           }
//
//   });

// Save Profile in the database
// Profile.save()
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the Profile."
//         });
//     });
// }

// Retrieve and return all profiles from the database.
exports.findAll = (req, res) => {
  Profile.find()
    .then(profiles => {
      res.send(profiles)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving profiles."
      })
    })
}

// Find a single profile with a noteId
exports.findOne = (req, res) => {
  Profile.findById(req.params.profileId)
    .then(profile => {
      if (!profile) {
        return res.status(404).send({
          message: "Profile not found with id " + req.params.profileId
        })
      }
      res.send(profile)
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Profile not found with id " + req.params.noteId
        })
      }
      return res.status(500).send({
        message: "Error retrieving profile with id " + req.params.profileId
      })
    })
}

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  console.log(req.body)
  // Validate Request
  if (!req.body) {
    return res.status(400).send({
      message: "Message content can not be empty"
    })
  }

  // Find note and update it with the request body
  Profile.findByIdAndUpdate(
    req.params.profileId,
    {
      $push: {
        messages: {
          user: req.body.user,
          message: req.body.message
        }
      }
    },
    { new: true }
  )
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: "Profile not found with id " + req.params.noteId
        })
      }
      res.send(note)
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Profile not found with id " + req.params.noteId
        })
      }
      return res.status(500).send({
        message: "Error sending message" + req.params.noteId
      })
    })
}

// Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {
//   Profile.findByIdAndRemove(req.params.noteId)
//       .then(note => {
//           if(!note) {
//               return res.status(404).send({
//                   message: "Profile not found with id " + req.params.noteId
//               });
//           }
//           res.send({message: "Profile deleted successfully!"});
//       }).catch(err => {
//           if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//               return res.status(404).send({
//                   message: "Profile not found with id " + req.params.noteId
//               });
//           }
//           return res.status(500).send({
//               message: "Could not delete note with id " + req.params.noteId
//           });
//       });
// };
