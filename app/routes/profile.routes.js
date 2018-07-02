module.exports = app => {
  const profiles = require("../controllers/profile.controller.js")

  // Create a new profile
  // app.post('/profiles', profiles.create);

  // Retrieve all profiles
  app.get("/profiles", profiles.findAll)

  // Retrieve a single profile with profileId
  app.get("/profiles/:profileId", profiles.findOne)

  // Update a profile with profileId
  app.put("/profiles/:profileId", profiles.update)

  // Delete a profile with profileId
  // app.delete('/profiles/:profileId', profiles.delete);
}
