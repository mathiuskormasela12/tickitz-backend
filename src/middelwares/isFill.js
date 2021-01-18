const isFill = require('../helper/isFill')
const response = require('../helper/response')

module.exports = (...reqBody) => {
  return (req, res, next) => {
    const isFills = isFill(req, reqBody)
    console.log(isFills)
    if (isFills.includes('false')) {
      response(res, 400, false, 'Form cannot be empty')
    } else {
      next()
    }
  }
}
