const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

const user = require('./user.cjs')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.end(req.url)
})

// user router
server.use('/api/user', user)


// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
