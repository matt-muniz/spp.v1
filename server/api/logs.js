const { Router } = require('express');
const router = Router();
const { partyEntry } = require('../models/LogParties');

router.get('/', (req, res) => {
  partyEntry.find().exec((err, entries) => {
    res.json(entries);
  });
});

router.post('/', async (req, res, next) => {
  try {
    const logEntry = new partyEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
