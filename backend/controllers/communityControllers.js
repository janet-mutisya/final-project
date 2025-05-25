const Post = require('../models/Post');

/**
 * Controller to create a new community post.
 */
exports.createPost = async (req, res) => {
  try {
    const newPost = new Post({ 
      author: req.user.id, 
      content: req.body.content 
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Controller to get all community posts.
 */
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate('author', 'username');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
