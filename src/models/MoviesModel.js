// ===== Movies Model
// Import all modules
// const db = require('./db')
const movies = require('./movies')

class MoviesModel {
  getAllMovies () {
    return movies.map(item => {
      return {
        id: item.id,
        title: item.Title,
        year: item.Year,
        type: item.Type,
        genre: item.Genre,
        poster: item.Poster
      }
    })
  }

  getMovieDetail (id) {
    return movies.filter(movie => movie.id === Number(id))
  }

  addMovie ({ title, year, genre, type, poster, writer, actors, plot }) {
    movies.push({
      id: movies.length + 1,
      Title: title,
      Year: year,
      Genre: genre,
      Type: type,
      Poster: poster,
      Writer: writer,
      Actors: actors,
      Plot: plot
    })

    return true
  }

  deleteMovie (id) {
    movies.forEach((item, index) => {
      if (item.id === Number(id)) {
        movies.splice(index, 1)
      }
    })

    return true
  }

  updateMovie ({ id, title, year, genre, type, poster, writer, actors, plot }) {
    movies.forEach((item, index) => {
      if (item.id === Number(id)) {
        item.Title = title
        item.Year = year
        item.Genre = genre
        item.Type = type
        item.Poster = poster
        item.Writer = writer
        item.Actors = actors
        item.Plot = plot
      }
    })
    return true
  }

  updateSeveralMovie (id, { title, year, genre, type, poster, writer, actors, plot }) {
    movies.forEach((item, index) => {
      if (Number(item.id) === Number(id)) {
        item.Title = title || item.Title
        item.Year = year || item.Year
        item.Genre = genre || item.Genre
        item.Type = type || item.Type
        item.Poster = poster || item.Poster
        item.Writer = writer || item.Writer
        item.Actors = actors || item.Actors
        item.Plot = plot || item.Plot
        console.log('ok')
      }
    })
    return true
  }
}

module.exports = new MoviesModel()
