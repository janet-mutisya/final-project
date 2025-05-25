/**
 * Middleware to detect user country (using a header or default value)
 */
module.exports = (req, res, next) => {
  // Check for a custom header 'x-country' or default to 'KENYA'
  req.country = req.headers['x-country'] || 'KENYA';
  next();
};
