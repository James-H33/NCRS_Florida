const express = require('express');
const router = express.Router();

router.get('/future-events', function(req, res) {
  res.render('future/future.pug');
});

router.get('/past-events', function(req, res) {
    res.render('past/past.pug');
});

module.exports = router;
