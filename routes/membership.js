const express = require('express');
const router = express.Router();

router.get('/membership', function(req, res) {
  res.render('membership/membership');
});

module.exports = router;
