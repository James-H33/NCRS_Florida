const express   = require('express');
const router    = express.Router();
const fs        = require('fs');

router.get('/admin', function(req, res) {
  res.render('admin/admin');
});

router.post('/admin/login', function(req, res) {
    console.log('Post request made!');
    res.send('Success');
});

module.exports = router;
