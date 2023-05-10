const express = require('express');
const router = express.Router();
const wikipediaController = require('../controllers/wikipediaController');

router.get('/:month/:day', wikipediaController.fetchWikipediaData);

module.exports = router;