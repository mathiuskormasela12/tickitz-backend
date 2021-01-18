// ===== Movies Controller
// Import all modules
const response = require('../helper/response')
const movieModel = require('../models/MoviesModel')
const pagination = require('../helper/pagination')

// import limit page
const { LIMIT_DATA } = process.env

exports.getAllMovies = (req, res) => {
  const movies = movieModel.getAllMovies()

  pagination(movies, req.query, LIMIT_DATA, 'title', 'movies', (results, prevPageLink, nextPageLink) => {
    if (results.length > 0) {
      return response(res, 200, true, 'Retrieve movies successfully', results, prevPageLink, nextPageLink)
    } else {
      return response(res, 200, true, 'Movies not available', results, prevPageLink, nextPageLink)
    }
  })
}

exports.getMovieDetail = (req, res) => {
  const movies = movieModel.getMovieDetail(req.params.id)
  if (movies.length > 0) {
    return response(res, 200, true, 'Retrieve movies details successfully', movies[0])
  } else {
    return response(res, 200, true, 'Movies details not available', movies[0])
  }
}

exports.addMovie = (req, res) => {
  const results = movieModel.addMovie(req.body)

  if (results) {
    return response(res, 200, true, 'Post movie successfully')
  } else {
    return response(res, 200, false, 'failed to post movie')
  }
}

exports.deleteMovie = (req, res) => {
  const results = movieModel.deleteMovie(req.params.id)

  if (results) {
    return response(res, 200, true, 'Delete movie successfully')
  } else {
    return response(res, 200, false, 'failed to delete movie')
  }
}

exports.updateMovie = (req, res) => {
  const results = movieModel.updateMovie(req.body)

  if (results) {
    return response(res, 200, true, 'Update movie successfully')
  } else {
    return response(res, 200, false, 'update to post movie')
  }
}

exports.updateSeveralMovie = (req, res) => {
  const results = movieModel.updateSeveralMovie(req.params.id, req.body)

  if (results) {
    return response(res, 200, true, 'Update movie successfully')
  } else {
    return response(res, 200, false, 'update to post movie')
  }
}
