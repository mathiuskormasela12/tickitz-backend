// ===== Movie Controller
// import package
const fs = require('fs')

// import response
const response = require('../helpers/response')

// import upload function
const upload = require('../helpers/upload')

// import genre model
const movieModel = require('../models/MovieModel')

// import show times model
const showTimes = require('../models/ShowTimeModel')

// import show cinemas model
const cinemas = require('../models/CinemaModel')

// Import pagination
const pagination = require('../helpers/pagination')

exports.create = async (req, res) => {
  const {
    title,
    releaseDate,
    duration,
    direct,
    casts,
    synopsis,
    category,
    genreId
  } = req.body

  const poster = await upload(req, 'movies')

  if (typeof poster === 'object') {
    return response(res, poster.status, poster.success, poster.message)
  }

  try {
    const results = await movieModel.create(title, category, releaseDate, duration, direct, casts, synopsis, poster, genreId)

    if (!results.success) {
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

exports.createShowTime = async (req, res) => {
  try {
    const {
      cinemaId,
      timeId,
      showTimeDate
    } = req.body

    const {
      id: movieId
    } = req.params

    const isTimeExist = await movieModel.getTimeByCond({
      id: timeId
    })

    if (isTimeExist.length < 1) {
      return response(res, 400, false, 'Unknown time id')
    }

    const isCinemaExist = await cinemas.findAllById(cinemaId)

    if (isCinemaExist.results.length < 1) {
      return response(res, 400, false, 'Unknown cinema id')
    }

    const isShowTimeExists = await showTimes.findAllByCond({
      timeId,
      cinemaId
    })

    if (isShowTimeExists.length > 0) {
      return response(res, 400, false, 'Show time is exists')
    }

    const insertShowTimes = await showTimes.create({
      showTimeDate,
      timeId,
      cinemaId,
      movieId
    })

    if (insertShowTimes.affectedRows < 1) {
      return response(res, 400, false, 'Failed to insert movie')
    }

    return response(res, 200, true, 'Successfull to add show times')
  } catch (err) {
    response(res, 500, false, 'Server Error')
    throw new Error(err)
  }
}

exports.getAllAdmin = async (req, res) => {
  const {
    limit = 5,
    search = '',
    by = 'id',
    sort = 'ASC'
  } = req.query

  try {
    const result = await movieModel.findAll(search, by, sort)

    if (limit < 1) {
      return response(res, 400, false, 'Bad Request')
    }

    pagination(result.results, req.query, limit, 'admin/movies', (results, prevPageLink, nextPageLink) => {
      return response(res, result.status, result.success, result.message, results, prevPageLink, nextPageLink)
    })
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.getAll = async (req, res) => {
  const {
    limit = 5,
    search = '',
    by = 'id',
    sort = 'ASC'
  } = req.query

  try {
    const result = await movieModel.findAll(search, by, sort)

    if (limit < 1) {
      return response(res, 400, false, 'Bad Request')
    }

    pagination(result.results, req.query, limit, 'movies', (results, prevPageLink, nextPageLink) => {
      return response(res, result.status, result.success, result.message, results, prevPageLink, nextPageLink)
    })
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.getAllByGenre = async (req, res) => {
  const {
    limit = 5,
    search = '',
    by = 'id',
    sort = 'ASC'
  } = req.query

  try {
    const result = await movieModel.findAll(search, by, sort)
    result.results = result.results.filter(item => item.genres.includes(req.params.genre))

    pagination(result.results, req.query, limit, 'movies', (results, prevPageLink, nextPageLink) => {
      return response(res, result.status, result.success, result.message, results, prevPageLink, nextPageLink)
    })
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.getMovieById = async (req, res) => {
  const { id } = req.params

  try {
    const results = await movieModel.findAllById(id)
    return response(res, results.status, results.success, results.message, results.results)
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.remove = async (req, res) => {
  const { id } = req.params

  try {
    const results = await movieModel.destroy(Number(id))
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
    const results = await movieModel.update(id, poster, req.body)

    if (typeof poster === 'string' && results.success) {
      fs.unlink('./public/uploads/' + results.oldPoster, err => {
        if (err) {
          console.log(err)
        }
      })
    }

    if (!results.success && typeof poster !== 'object' && results.oldPoster) {
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

exports.createTime = async (req, res) => {
  try {
    const isExist = await movieModel.getTimeByCond({ showTime: req.body.time })

    if (isExist.length > 0) {
      return response(res, 400, false, 'Time exists')
    }
    const result = await movieModel.createTime(req.body.time)

    if (result.affectedRows > 0) {
      return response(res, 200, true, 'Successfully add new time')
    } else {
      return response(res, 400, false, 'Failed add new time')
    }
  } catch (err) {
    response(res, 500, false, 'Server Error')
    // throw new Error(err)
    console.log(err)
  }
}
