const { Router } = require('express');

const imageController = require('../controllers/imageController');

const imageRouter = Router();

imageRouter.get('/image', imageController.image);
imageRouter.get('/preview', imageController.preview);
imageRouter.post('/publish', imageController.publish);

module.exports = imageRouter