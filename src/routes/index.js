const { Router } = require('express')

const imageRoutes = require('./imageRoutes');

const routes = Router()

routes.use('/api', imageRoutes)

module.exports = routes