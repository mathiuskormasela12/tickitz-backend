// ===== Moviegoers Controller
// import all modules
const response = require('../helpers/response')

// import model
const moviegoers = require('../models/Moviegoers')
module.exports = async (req, res) => {
  try {
    const isExist = await moviegoers.getMovieGoersByEmail(req.body.email)

    if (isExist.length < 1) {
      const result = await moviegoers.create(req.body.email)

      if (result.affectedRows > 0) {
        return response(res, 200, true, 'You are moviegoers right know')
      } else {
        return response(res, 400, false, 'Failed to add moviegoers')
      }
    } else {
      return response(res, 400, false, 'Your email already in use')
    }
  } catch (err) {
    throw new Error(err)
  }
}
