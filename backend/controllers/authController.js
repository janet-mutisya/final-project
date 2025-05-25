const User = require('../models/User');
const jwt = require('jsonwebtoken');

/**
 * Controller to handle user registration.
 */
exports.register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Controller to handle user login.
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });
    // In production, compare hashed passwords
    if (user.password !== password) return res.status(401).json({ error: 'Incorrect password' });
    
    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
