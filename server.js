const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const mongo_uri = process.env.MONGODB_URI
require("dotenv").config()

// const routes = require("./app/routes/profile.routes.js")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use("/", routes)

const mongoose = require("mongoose")

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to the database")
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...")
    process.exit()
  })

// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to diggity. Connecting people via pets." })
})

require("./app/routes/profile.routes.js")(app)

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})
