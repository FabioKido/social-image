const { Router } = require('express')

const imageRoutes = require('./imageRoutes');

const routes = Router()

routes.use('/image', imageRoutes)

module.exports = routes