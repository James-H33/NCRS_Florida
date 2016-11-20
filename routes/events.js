const express = require('express');
const router = express.Router();

router.get('/future-events', function(req, res) {
  res.render('future/future');
});

router.get('/past-events', function(req, res) {
    res.render('past/past');
});

router.get('/events/upload', function(req, res) {
    res.render('events/upload');
});

module.exports = router;
