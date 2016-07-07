const express = require('express');
const router = express.Router();

router.get('/contacts', function(req, res) {
  res.render('contacts/contacts');
});

module.exports = router;
