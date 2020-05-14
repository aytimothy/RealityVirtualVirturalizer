var moment = require('moment')

// define a middleware function that logs each http request to console
const logger = (req, res, next) => {

  const colors = {
    yellow: "\x1b[33m",
    white: "\x1b[37m",
    purple: "\x1b[35m"
  }
  console.log(
    `${colors.purple}[${moment().format('h:mm:ss A')}]` +
    `${colors.yellow} ${req.method}` +
    `${colors.white} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  next()
}

module.exports = logger;