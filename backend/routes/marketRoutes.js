const express = require('express');
const router = express.Router();
const marketController = require('../controllers/marketController');

// Market data route for current prices
router.get('/', marketController.getMarketPrices);

module.exports = router;
