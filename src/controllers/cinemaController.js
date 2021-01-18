// ===== Cinema Controller
// Import all modules
const response = require('../helper/response')
const cinemaModel = require('../models/CinemaModel')
const pagination = require('../helper/pagination')

// import limit page
const { LIMIT_DATA } = process.env

exports.getAllCinemas = (req, res) => {
  const cinemas = cinemaModel.getAllCinemas()
  console.log(cinemas)
  pagination(cinemas, req.query, LIMIT_DATA, 'name', 'cinemas', (results, prevPageLink, nextPageLink) => {
    if (results.length > 0) {
      return response(res, 200, true, 'Retrieve cinemas successfully', results, prevPageLink, nextPageLink)
    } else {
      return response(res, 200, true, 'Cinemass not available', results, prevPageLink, nextPageLink)
    }
  })
}

exports.getCinemasDetail = (req, res) => {
  const cinemas = cinemaModel.getCinemasDetail(req.params.id)

  pagination(cinemas, req.query, LIMIT_DATA, 'name', 'cinemas', (results) => {
    if (results.length > 0) {
      return response(res, 200, true, 'Retrieve movies details successfully', results[0])
    } else {
      return response(res, 200, true, 'Movies details not available', results[0])
    }
  })
}

exports.addCinema = (req, res) => {
  const results = cinemaModel.addCinema(req.body)

  if (results) {
    return response(res, 200, true, 'add new cinema successfully')
  } else {
    return response(res, 400, false, 'failed to add new cinema', results[0])
  }
}

exports.deleteCinema = (req, res) => {
  const results = cinemaModel.deleteCinema(req.params.id)

  if (results) {
    return response(res, 200, true, 'Delete cinema successfully')
  } else {
    return response(res, 200, false, 'failed to delete cinema')
  }
}

exports.updateCinema = (req, res) => {
  const results = cinemaModel.updateCinema(req.body)

  if (results) {
    return response(res, 200, true, 'Update cinema successfully')
  } else {
    return response(res, 200, false, 'update to post cinema')
  }
}

exports.updateSeveralCinema = (req, res) => {
  const results = cinemaModel.updateSeveralCinema(req.params.id, req.body)

  if (results) {
    return response(res, 200, true, 'Update cinema successfully')
  } else {
    return response(res, 200, false, 'update to post cinema')
  }
}
