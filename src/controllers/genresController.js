// ===== Genres Controller
// import response
const response = require('../helpers/response')

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
    limit = 5,
    page = 1,
    search = '',
    by = 'id',
    sort = 'ASC'
  } = req.query

  const dataLimit = Number(limit) * Number(page)
  const offset = (Number(page) - 1) * Number(limit)

  try {
    const results = await genreModel.findAll(limit, offset, search, by, sort)
    const nextResults = await genreModel.findAll(limit, offset + dataLimit, search, by, sort)

    const nextPageLink = nextResults.results.length > 0 ? `${process.env.APP_URL}/admin/genres?${!req.query.page ? 'page=2&' : ''}${Object.keys(req.query).map((item, index) => `${item}=${(item === 'page') ? (Number(Object.values(req.query)[index]) + 1) : Object.values(req.query)[index]}`).join('&')}` : null
    const prevPageLink = (offset - limit) >= 0 ? `${process.env.APP_URL}/admin/genres?${!req.query.page ? 'page=2&' : ''}${Object.keys(req.query).map((item, index) => `${item}=${(item === 'page') ? (Number(Object.values(req.query)[index]) - 1) : Object.values(req.query)[index]}`).join('&')}` : null
    return response(res, results.status, results.success, results.message, results.results, prevPageLink, nextPageLink)
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
