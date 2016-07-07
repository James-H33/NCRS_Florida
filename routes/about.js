const express = require('express');
const router = express.Router();

router.get('/about', function(req, res) {
  res.render('about/about');
});

module.exports = router;
