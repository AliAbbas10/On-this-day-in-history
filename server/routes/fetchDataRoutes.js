const express = require('express');
const router = express.Router();
const fetchDataController = require('../controllers/eventFetchController');

router.get('/:month/:day', fetchDataController.fetchDataSummary);

module.exports = router;