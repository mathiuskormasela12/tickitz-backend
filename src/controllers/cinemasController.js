// ===== Cinemas Controller
// import package
const fs = require('fs')
const pagination = require('../helpers/pagination')

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
    const result = await cinemaModel.findAll(search, by, sort)

    pagination(result.results, req.query, limit, 'cinemas', (results, prevPageLink, nextPageLink) => {
      return response(res, result.status, result.success, result.message, results, prevPageLink, nextPageLink)
    })
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.getAllCities = async (req, res) => {
  try {
    const result = await cinemaModel.getCities()

    if (result.length > 0) {
      const cities = result.map(item => item.city)
      return response(res, 200, true, 'Success to get all cinema cities', cities)
    } else {
      return response(res, 400, false, 'Failed to get all cinema cities', [])
    }
  } catch (error) {
    response(res, 500, false, 'Server Error', [])
    throw new Error(error)
  }
}

exports.getCinemaById = async (req, res) => {
  const { id } = req.params

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
