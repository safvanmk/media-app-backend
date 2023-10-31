// 1 import json-server
const jsonserver = require('json-server')

// 2 create a server for media app
const mediaAppServer = jsonserver.create()

// 3 set up path for db.json
const router = jsonserver.router('db.json')

// 4 return a middleware used by jsonserver
const middleware = jsonserver.defaults()

// 5 set a port number
const port = process.env.PORT || 4000

// 6 use middlware in app
mediaAppServer.use(middleware)
mediaAppServer.use(router)

// 7 to run the port
mediaAppServer.listen(port, () => {
  console.log('Listening on port ' +port);
})