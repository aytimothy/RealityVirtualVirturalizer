const express = require('express');

const app = express();

const cors = require('cors'); // cross-origin resource sharing

const bodyParser = require('body-parser'); // body-parser to handle HTTP POST requests

const path = require('path'); // rosolve project path


const logger = require('./logger'); // logger for console

app.use(cors()); // add cross-origin resource sharing to express server
app.use(logger); // add logger to express server

app.use(bodyParser.json({ limit: '50mb', extended: true })); // set body-parser settings
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, '../dist/virtualUI/'))); // make dist directory accessable

var PORT = process.env.PORT || 8080; // set server port

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port: ${PORT}`); // start listening
});

// Import routes
const index = require('./routes/filesys');
app.use('/', index);
