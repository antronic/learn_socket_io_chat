import express from 'express'
import http from 'http'
import path from 'path'
import bodyParser from 'body-parser'
let app = express()
let server = http.Server(app)
let io = require('socket.io')(server)

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

import routes from './app/routes'
routes(app)

server.listen('3000' | process.env.PORT, () => {
  console.log("Listening on port", server.address().port);
})
