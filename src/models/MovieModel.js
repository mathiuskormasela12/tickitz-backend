// ===== Movie Model
// import Database
const Database = require('./Database')

// import models
const genreModel = require('./GenreModel')

class MovieModel extends Database {
  create (title, releaseDate, duration, direct, casts, synopsis, poster, genreId) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT title FROM movies WHERE title = ?'
      this.db.query(sql, title, (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length > 0) {
          return resolve({
            status: 400,
            success: false,
            message: 'Movie has been there'
          })
        } else {
          // const genresId = []
          // genreId.forEach(async id => {
          //   const genre = await genreModel.findAllById(Number(id))
          //   genresId.push(genre.results[0].id)
          // })

          // if (genreId.length !== genresId.length) {
          //   return resolve({
          //     status: 400,
          //     success: false,
          //     message: 'Unknown genre'
          //   })
          // }

          const sql = 'INSERT INTO movies SET ?'
          this.db.query(sql, { title, releaseDate, duration, direct, casts, synopsis, poster }, (err, result) => {
            if (err) {
              return reject(err)
            } else {
              genreId.forEach(item => {
                console.log(item)
                this.db.query('INSERT INTO moviesGenres SET ?', { movie_id: result.insertId, genre_id: item }, err => {
                  if (err) {
                    return reject(err)
                  }
                })
              })
              console.log(result)
              return resolve({
                status: 200,
                success: true,
                message: 'New movies has been created'
              })
            }
          })
        }
      })
    })
  }

  findAll (limit, offset, keyword, by, sort) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM movies
                   WHERE title LIKE "%${keyword}%"
                   ORDER BY ${by} ${sort} 
                   LIMIT ${limit} OFFSET ${offset}`
      this.db.query(sql, (err, results) => {
        if (err) {
          return reject(err)
        } else {
          results = results.map(item => {
            return {
              id: item.id,
              title: item.title,
              poster: `${process.env.URL}/uploads/${item.poster}`,
              releaseDate: item.releaseDate,
              duration: item.duration,
              direct: item.direct,
              casts: item.casts,
              synopsis: item.synopsis
            }
          })
          return resolve({
            status: 200,
            success: true,
            message: 'Get all movies successfully',
            results: results
          })
        }
      })
    })
  }

  findAllById (id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM movies WHERE id = ?'
      this.db.query(sql, [id], (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length < 1) {
          results = results.map(item => {
            return {
              id: item.id,
              title: item.title,
              poster: `${process.env.URL}/uploads/${item.poster}`,
              releaseDate: item.releaseDate,
              duration: item.duration,
              direct: item.direct,
              casts: item.casts,
              synopsis: item.synopsis
            }
          })
          return resolve({
            status: 200,
            success: false,
            message: `MOvie with id ${id} not available`,
            results: results
          })
        } else {
          results = results.map(item => {
            return {
              id: item.id,
              title: item.title,
              poster: `${process.env.URL}/uploads/${item.poster}`,
              releaseDate: item.releaseDate,
              duration: item.duration,
              direct: item.direct,
              casts: item.casts,
              synopsis: item.synopsis
            }
          })
          return resolve({
            status: 200,
            success: true,
            message: 'Get all movies successfully',
            results: results
          })
        }
      })
    })
  }

  destroy (id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT title, poster FROM movies WHERE id = ?'
      this.db.query(sql, id, (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length < 1) {
          return resolve({
            status: 400,
            success: false,
            message: 'Unknown movie'
          })
        } else {
          const sql = 'DELETE FROM movies WHERE id = ?'
          this.db.query(sql, [id], (err) => {
            if (err) {
              return reject(err)
            } else {
              return resolve({
                status: 200,
                success: true,
                message: 'Movie has been deleted',
                poster: results[0].poster
              })
            }
          })
        }
      })
    })
  }

  update (id, poster, { title, releaseDate, duration, direct, casts, synopsis }) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM movies WHERE id = ?'
      this.db.query(sql, id, (err, results) => {
        if (err) {
          return reject(err)
        } else {
          const sql = 'UPDATE movies SET ? WHERE id = ?'

          this.db.query(sql, [
            {
              title: title || results[0].title,
              poster: poster || results[0].poster,
              releaseDate: releaseDate || results[0].releaseDate,
              duration: duration || results[0].duration,
              direct: direct || results[0].direct,
              casts: casts || results[0].casts,
              synopsis: synopsis || results[0].synopsis
            }, id], (err) => {
            if (err) {
              return reject(err)
            } else {
              return resolve({
                status: 200,
                success: true,
                message: 'New movie has been edited',
                oldPoster: results[0].poster
              })
            }
          })
        }
      })
    })
  }
}

module.exports = new MovieModel()
