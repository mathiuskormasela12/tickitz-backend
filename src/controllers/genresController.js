// ===== Genres Controller
// import response
const response = require('../helpers/response')
const pagination = require('../helpers/pagination')

// import genre model
const genreModel = require('../models/GenreModel')

exports.create = async (req, res) => {
  const { name } = req.body

  try {
    const results = await genreModel.create(name.toLowerCase())
    return response(res, results.status, results.success, results.message)
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.getAll = async (req, res) => {
  const {
    limit = '5',
    search = '',
    by = 'id',
    sort = 'ASC'
  } = req.query

  if (limit < 1 || limit.match(/\d/) === null) {
    return response(res, 400, false, 'Bad Request')
  } else if (limit.match(/[0-9]/gi) !== null && limit.match(/[a-z]/gi) !== null) {
    return response(res, 400, false, 'Bad Request')
  }

  if (sort.toLowerCase() !== 'asc' && sort.toLowerCase() !== 'desc') {
    return response(res, 400, false, 'Bad Request')
  }

  try {
    const result = await genreModel.findAll(search, by, sort)
    pagination(result.results, req.query, limit, 'admin/genres', (results, prevPageLink, nextPageLink) => {
      return response(res, result.status, result.success, result.message, results, prevPageLink, nextPageLink)
    })
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.getGenreById = async (req, res) => {
  const { id } = req.params

  try {
    const results = await genreModel.findAllById(id)
    return response(res, results.status, results.success, results.message, results.results)
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.remove = async (req, res) => {
  const { id } = req.params

  try {
    const results = await genreModel.destroy(Number(id))
    return response(res, results.status, results.success, results.message, results.results)
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.edit = async (req, res) => {
  const { id } = req.params

  try {
    const results = await genreModel.update(id, req.body.name)
    return response(res, results.status, results.success, results.message, results.results)
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}
