// ===== Moviegoers Middleware
// import modules
const response = require('../helpers/response')

module.exports = (req, res, next) => {
  if (!req.body.email) {
    return response(res, 400, false, "Form can't be empty")
  } else if (!req.body.email.match(/@\b/g) || req.body.email.match(/\s/) || req.body.email.match(/\b[0-9]/) || !req.body.email.split('@').pop().includes('.')) {
    return response(res, 400, false, 'Incorect email')
  } else {
    return next()
  }
}
