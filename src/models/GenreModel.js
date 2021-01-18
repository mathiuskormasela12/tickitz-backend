// ===== Genre Model
// Import all modules
// const db = require('./db')
const movieModel = require('./MoviesModel')
const genreList = require('./genre')

class GenreModel {
  getMovieByGenreName (genre) {
    console.log(genre)
    const movies = movieModel.getAllMovies()
    return movies.filter(movie => {
      return movie.genre.toLowerCase().includes(genre.toLowerCase())
    })
  }

  getGenreById (id) {
    return genreList.filter(item => {
      return item.id === Number(id)
    })
  }

  getAllGenre () {
    return genreList
  }

  addGenre (name) {
    genreList.push({
      id: genreList.length + 1,
      name
    })

    return true
  }

  deleteGenre (id) {
    genreList.forEach((item, index) => {
      if (item.id === Number(id)) {
        genreList.splice(index, 1)
      }
    })

    return true
  }

  updateGenre ({ id, name }) {
    genreList.forEach((item, index) => {
      if (item.id === Number(id)) {
        item.name = name
      }
    })
    return true
  }

  updateSeveralGenre (id, { name }) {
    genreList.forEach((item, index) => {
      if (item.id === Number(id)) {
        item.name = name || item.name
      }
    })
    return true
  }
}

module.exports = new GenreModel()
