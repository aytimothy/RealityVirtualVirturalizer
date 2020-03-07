const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('./logger');

// add cross-origin resource sharing to express server
app.use(cors());

// set logger
app.use(logger);

// add bodyparser module to express server
app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// Import routes
const index = require('./routes/index');
app.use('/', index);
