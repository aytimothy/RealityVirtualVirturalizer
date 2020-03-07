// define a middleware function that logs each http request to console
const logger = (req, res, next) => {
  const colors = {
    yellow: "\x1b[33m",
    white: "\x1b[37m",
    purple: "\x1b[35m"
  }
    console.log(
    `${colors.yellow} [METHOD]: ${req.method}\n`+
    `${colors.white} [HOST]: ${req.protocol}://${req.get('host')}${req.originalUrl}\n`+
    `${colors.purple} [TIMESTAMP]: ${Date()}\n`
    );
    next()
  }

module.exports = logger;