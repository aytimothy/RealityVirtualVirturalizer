const express = require('express');

const app = express();

const cors = require('cors'); // cross-origin resource sharing

const bodyParser = require('body-parser'); // body-parser to handle HTTP POST requests

const path = require('path'); // rosolve project path

const ip = require("ip");
process.env.HOST = ip.address();

const logger = require('./logger'); // logger for console

app.use(cors()); // add cross-origin resource sharing to express server
app.use(logger); // add logger to express server

app.use(bodyParser.json({ limit: '50mb', extended: true })); // set body-parser settings
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, '../dist/virtualUI/'))); // make dist directory accessable

var PORT = process.env.PORT || 8080; // set server port
var HOST = process.env.HOST //set local ip address

app.listen(PORT, HOST, () => {
  console.log(`Express server listening on ${HOST}:${PORT}`); // start listening
});

// Import routes
const filesys = require('./routes/filesys');

app.use('/filesys', filesys);
