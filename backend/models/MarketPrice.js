const mongoose = require('mongoose');

const MarketPriceSchema = new mongoose.Schema({
  item: { type: String, required: true },
  priceKES: { type: Number, required: true },
  priceZAR: { type: Number },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MarketPrice', MarketPriceSchema);
