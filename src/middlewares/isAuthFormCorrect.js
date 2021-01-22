// ===== isAuthFormCorrect Middleware
// import helpers
const response = require('../helpers/response')

module.exports = (req, res, next) => {
  const email = req.body.email.match(/[^@$a-z0-9.]/gi)
  if (email || !req.body.email.match(/@\b/g) || req.body.email.match(/\s/) || req.body.email.match(/\b[0-9]/) || !req.body.email.split('@').pop().includes('.')) {
    response(res, 400, false, 'Incorect email')
  } else if (req.body.password.length > 15 || req.body.password.length < 5) {
    response(res, 400, false, 'Password min 5 character and max 15 character')
  } else if (req.body.password.match(/[a-z]/g) === null || req.body.password.match(/\d/g) === null || req.body.password.match(/[A-Z]/g) === null || req.body.password.match(/[^a-z0-9]/gi) === null) {
    response(res, 400, false, 'Password must include lower case and uppercase letters, numbers and symbol')
  } else if (req.body.password_confirm && (req.body.password !== req.body.password_confirm)) {
    response(res, 400, false, "Password don't match")
  } else if (req.body.role && req.body.role !== 'admin' && req.body.role !== 'user') {
    response(res, 400, false, 'Incorrect role')
  } else {
    next()
  }
}
