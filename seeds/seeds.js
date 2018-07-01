const { mongoose, db } = require("../config/database.config.js")
const Profiles = require("../app/models/profile.model.js")

const data = {
  profiles: [
    {
      name: "Muffins",
      age: 1.5,
      location: {
        timestamp: 1529873085,
        coords: {
          accuracy: 5,
          altitude: 0,
          altitudeAccuracy: -1,
          heading: -1,
          latitude: 39.733963082,
          longitude: -104.94510093,
          speed: -1
        }
      },
      image: "https://s3.us-east-2.amazonaws.com/diggity-image-hosting/adorable-animal-bull-160846.jpg",
      friends: [],
      active: true,
      messages: [
        {
          user: "",
          message: ""
        }
      ]
    },
    {
      name: "Chloe",
      age: 0.7,
      location: {
        timestamp: 1529527485,
        coords: {
          accuracy: 5,
          altitude: 0,
          altitudeAccuracy: -1,
          heading: -1,
          latitude: 39.73327168,
          longitude: -104.93929409,
          speed: -1
        }
      },
      image: "https://s3.us-east-2.amazonaws.com/diggity-image-hosting/animal-collar-dog-8700.jpg",
      friends: [],
      active: true,
      messages: [
        {
          user: "",
          message: ""
        }
      ]
    },
    {
      name: "Roxanne",
      age: 3,
      location: {
        timestamp: 1529441085,
        coords: {
          accuracy: 5,
          altitude: 0,
          altitudeAccuracy: -1,
          heading: -1,
          latitude: 39.737978647,
          longitude: -104.93328548,
          speed: -1
        }
      },
      image: "https://s3.us-east-2.amazonaws.com/diggity-image-hosting/animal-corgi-dog-58997.jpg",
      friends: [],
      active: true,
      messages: [
        {
          user: "",
          message: ""
        }
      ]
    },
    {
      name: "John Rambo",
      age: 2,
      location: {
        timestamp: 1528663485,
        coords: {
          accuracy: 5,
          altitude: 0,
          altitudeAccuracy: -1,
          heading: -1,
          latitude: 39.73767041,
          longitude: -104.93017197,
          speed: -1
        }
      },
      image: "https://s3.us-east-2.amazonaws.com/diggity-image-hosting/animal-dog-golden-retriever-9080.jpg",
      friends: [],
      active: true,
      messages: [
        {
          user: "",
          message: ""
        }
      ]
    }
  ]
}

Profiles.remove({}).then(() => {
  Profiles.insertMany(data.profiles)
})

console.log(data.profiles)
