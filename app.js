const express       = require('express');
const bodyParser    = require('body-parser');
const logger        = require('morgan');

// Require App Routes
const MembershipRoute   = require('./routes/membership');
const ContactsRoute     = require('./routes/contacts');
const AboutRoute        = require('./routes/about');
const EventsRoute       = require('./routes/events');
const AdminRoute        = require('./routes/admin');


// Express Instance
const app = express();

// Ports
const port = process.env.PORT || 5000;
const portIP = process.env.IP;

// Settings
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
})

// Using Routes
app.use('/', MembershipRoute);
app.use('/', ContactsRoute);
app.use('/', AboutRoute);
app.use('/', EventsRoute);
app.use('/', AdminRoute);

app.listen(port, portIP, function() {
  console.log('Server is listening on port.. ' + port);
})
