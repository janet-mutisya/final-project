const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');
const authMiddleware = require('../middlewares/authMiddleware');

// Community post routes
router.post('/', authMiddleware, communityController.createPost);
router.get('/', communityController.getPosts);

module.exports = router;
