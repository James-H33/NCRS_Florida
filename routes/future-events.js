const express = require('express');
const router = express.Router();

router.get('/future-events', function(req, res) {
  res.render('future/future.pug');
});

module.exports = router;
