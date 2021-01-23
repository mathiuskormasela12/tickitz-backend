// ===== Auth Middleware
// import all modules
const response = require('../helpers/response')
const jwt = require('jsonwebtoken')

const { SECRET } = process.env

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, SECRET, (err, decode) => {
      if (err) {
        return response(res, 400, false, err.message)
      } else {
        req.data = decode
        return next()
      }
    })
  } else {
    return response(res, 403, false, 'Forbidden')
  }
}
