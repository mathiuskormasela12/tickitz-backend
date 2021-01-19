const isFill = require('../helpers/isFormFill')
const response = require('../helpers/response')

module.exports = (...reqBody) => {
  return (req, res, next) => {
    const isFills = isFill(req, reqBody)
    console.log(isFills)
    if (isFills.includes('false')) {
      response(res, 400, false, "Form can't be empty")
    } else {
      next()
    }
  }
}
