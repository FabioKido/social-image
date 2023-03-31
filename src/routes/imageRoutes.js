const { Router } = require('express');

const imageController = require('../controllers/imageController');

const imageRouter = Router();

imageRouter.get('/new', imageController.show);

module.exports = imageRouter