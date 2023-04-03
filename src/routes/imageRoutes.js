const { Router } = require('express');

const imageController = require('../controllers/imageController');

const imageRouter = Router();

imageRouter.get('/image', imageController.store);
imageRouter.get('/preview', imageController.show);
imageRouter.post('/publish', imageController.custom);

module.exports = imageRouter