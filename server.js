const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const mongo_uri = process.env.MONGODB_URI
// var http = require("http")
// var socketio = require("socket.io")
//
// var server = http.Server(app)
// var websocket = socketio(server)
// server.listen(4000, () => console.log("listening on *:4000"))
//
// var clients = {}
// var users = {}
//
// var chatId = 1
//
// websocket.on("connection", socket => {
//   clients[socket.id] = socket
//   socket.on("userJoined", userId => onUserJoined(userId, socket))
//   socket.on("message", message => onMessageReceived(message, socket))
// })

require("dotenv").config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening on port 3000")
})
