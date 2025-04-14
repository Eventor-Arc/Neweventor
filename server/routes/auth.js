const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser  = new User({ name, email, password });

  try {
    await newUser .save();
    res.status(201).send('User  registered successfully');
  } catch (error) {
    res.status(400).send('Error registering user: ' + error.message);
  }
});

module.exports = router;