import express from 'express'
import http from 'http'
let app = express()
let server = http.Server(app)
let io = require('socket.io')(server)


server.listen('3000' | process.env.PORT, () => {
  console.log("Listening on port", server.address().port);
})
