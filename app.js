const express = require('express');
const app     = express();

// Require App Routes
const MembershipRoute   = require('./routes/membership');
const ContactsRoute     = require('./routes/contacts');
const AboutRoute        = require('./routes/about');
const FutureRoute       = require('./routes/future-events');

// Ports
const port = process.env.PORT || 5000;
const portIP = process.env.IP;

// Settings
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
})

// Using Routes
app.use('/', MembershipRoute);
app.use('/', ContactsRoute);
app.use('/', AboutRoute);
app.use('/', FutureRoute);


app.listen(port, portIP, function() {
  console.log('Server is listening on port.. ' + port);
})
