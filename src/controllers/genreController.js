// ===== Movies Controller
// Import all modules
const response = require('../helper/response')
const genreModel = require('../models/GenreModel')
const pagination = require('../helper/pagination')

// import limit page
const { LIMIT_DATA } = process.env

exports.getMovieByGenreName = (req, res) => {
  const movies = genreModel.getMovieByGenreName(req.params.name)
  console.log(movies)
  pagination(movies, req.query, LIMIT_DATA, 'title', 'genre', (results, prevPageLink, nextPageLink) => {
    if (results.length > 0) {
      return response(res, 200, true, 'Retrieve movies successfully', results, prevPageLink, nextPageLink)
    } else {
      return response(res, 200, true, 'Movies not available', results, prevPageLink, nextPageLink)
    }
  })
}

exports.getGenreByGenreId = (req, res) => {
  const movies = genreModel.getGenreById(req.params.id)
  console.log(movies)
  pagination(movies, req.query, LIMIT_DATA, 'name', 'genre', (results, prevPageLink, nextPageLink) => {
    if (results.length > 0) {
      return response(res, 200, true, 'Retrieve movies successfully', results, prevPageLink, nextPageLink)
    } else {
      return response(res, 200, true, 'Movies not available', results, prevPageLink, nextPageLink)
    }
  })
}

exports.getAllGenre = (req, res) => {
  const genres = genreModel.getAllGenre()
  if (genres.length > 0) {
    return response(res, 200, true, 'Retrieve genres successfully', genres)
  } else {
    return response(res, 200, true, 'Genres not available', genres)
  }
}

exports.getMovieDetail = (req, res) => {
  const movies = genreModel.getMovieDetail(req.params.id)

  pagination(movies, req.query, LIMIT_DATA, 'title', 'genre', (results) => {
    if (results.length > 0) {
      return response(res, 200, true, 'Retrieve movies details successfully', results[0])
    } else {
      return response(res, 200, true, 'Movies details not available', results[0])
    }
  })
}

exports.addGenre = (req, res) => {
  const results = genreModel.addGenre(req.body.name)

  if (results) {
    return response(res, 200, true, 'add new genre successfully')
  } else {
    return response(res, 400, false, 'failed to add new genre', results[0])
  }
}

exports.deleteGenre = (req, res) => {
  const results = genreModel.deleteGenre(req.params.id)

  if (results) {
    return response(res, 200, true, 'Delete genre successfully')
  } else {
    return response(res, 200, false, 'failed to genre move')
  }
}

exports.updateGenre = (req, res) => {
  const results = genreModel.updateGenre(req.body)

  if (results) {
    return response(res, 200, true, 'Update genre successfully')
  } else {
    return response(res, 200, false, 'update to post genre')
  }
}

exports.updateSeveralGenre = (req, res) => {
  const results = genreModel.updateSeveralGenre(req.params.id, req.body)

  if (results) {
    return response(res, 200, true, 'Update genre successfully')
  } else {
    return response(res, 200, false, 'update to post genre')
  }
}
