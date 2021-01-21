// ===== Cinemas Controller
// import package
const fs = require('fs')

// import response
const response = require('../helpers/response')

// import upload function
const upload = require('../helpers/upload')

// import genre model
const cinemaModel = require('../models/CinemaModel')

exports.create = async (req, res) => {
  const {
    name,
    address,
    pricePerSeat,
    city
  } = req.body

  const poster = await upload(req, 'cinemas')

  if (typeof poster === 'object') {
    return response(res, poster.status, poster.success, poster.message)
  }

  try {
    const results = await cinemaModel.create(name, poster, address, pricePerSeat, city)

    if (!results.success) {
      fs.unlink('./public/uploads/' + poster, err => {
        if (err) {
          console.log(err)
        }
      })
    }
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

  if (limit < 1) {
    return response(res, 400, false, 'Bad Request')
  }

  try {
    const results = await cinemaModel.findAll(limit, offset, search, by, sort)
    const nextResults = await cinemaModel.findAll(limit, offset + dataLimit, search, by, sort)

    const nextPageLink = nextResults.results.length > 0 ? `${process.env.APP_URL}/admin/genre?page=${Number(page) + 1}` : null
    const prevPageLink = (offset - limit) >= 0 ? `${process.env.APP_URL}/admin/genre?page=${page - 1}` : null
    return response(res, results.status, results.success, results.message, results.results, prevPageLink, nextPageLink)
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.getCinemaById = async (req, res) => {
  const { id } = req.params
  console.log(id)

  try {
    const results = await cinemaModel.findAllById(id)
    return response(res, results.status, results.success, results.message, results.results)
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.remove = async (req, res) => {
  const { id } = req.params

  try {
    const results = await cinemaModel.destroy(Number(id))
    if (results.success) {
      fs.unlink('./public/uploads/' + results.poster, err => {
        if (err) {
          console.log(err)
        }
      })
    }
    return response(res, results.status, results.success, results.message, results.results)
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.edit = async (req, res) => {
  const { id } = req.params

  let poster

  if (req.files) {
    poster = await upload(req, 'cinemas')
  }

  try {
    const results = await cinemaModel.update(id, poster, req.body)

    if (typeof poster === 'string' && results.success) {
      fs.unlink('./public/uploads/' + results.oldPoster, err => {
        if (err) {
          console.log(err)
        }
      })
    }

    if (!results.success && typeof poster !== 'object') {
      fs.unlink('./public/uploads/' + poster, err => {
        if (err) {
          console.log(err)
        }
      })
    }
    return response(res, results.status, results.success, results.message, results.results)
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}
