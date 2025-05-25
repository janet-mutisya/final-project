const MarketPrice = require('../models/MarketPrice');

/**
 * Controller to fetch current market price data.
 */
exports.getMarketPrices = async (req, res) => {
  try {
    const prices = await MarketPrice.find({});
    res.json(prices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
