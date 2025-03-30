const express = require("express");
const router = express.Router();
const { getCollection } = require("./models/index");
const { ObjectId } = require("mongodb");


// Routes
app.get('/api/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.post('/api/events', async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.json(newEvent);
});
module.exports = router;