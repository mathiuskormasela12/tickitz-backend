// ===== Movie Model
// import Database
const Database = require('./Database')

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
          this.db.query(`SELECT * FROM genres WHERE id IN (${typeof genreId === 'string' ? genreId : genreId.map(item => item).join()})`, (err, genreResult) => {
            const genresId = []
            if (err) {
              return reject(err)
            } else {
              genreResult.forEach(item => {
                genresId.push(item)
              })
            }

            if (genresId.length < 1 && typeof genreId === 'string') {
              return resolve({
                status: 400,
                success: false,
                message: 'Unknown genre'
              })
            }

            if (genreId.length !== genresId.length && typeof genreId === 'object') {
              return resolve({
                status: 400,
                success: false,
                message: 'Unknown genre'
              })
            }

            const sql = 'INSERT INTO movies SET ?'
            this.db.query(sql, { title, releaseDate, duration, direct, casts, synopsis, poster }, (err, result) => {
              if (err) {
                return reject(err)
              } else {
                if (typeof genreId === 'object') {
                  genreId.forEach(item => {
                    console.log(item)
                    this.db.query('INSERT INTO moviesGenres SET ?', { movie_id: result.insertId, genre_id: item }, err => {
                      if (err) {
                        return reject(err)
                      }
                    })
                  })
                } else {
                  this.db.query('INSERT INTO moviesGenres SET ?', { movie_id: result.insertId, genre_id: genreId }, err => {
                    if (err) {
                      return reject(err)
                    }
                  })
                }
                return resolve({
                  status: 200,
                  success: true,
                  message: 'New movies has been created'
                })
              }
            })
          })
        }
      })
    })
  }

  findAll (keyword, by, sort) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT movies.id, movies.title,
                   movies.poster, movies.releaseDate,
                   movies.duration, movies.direct,
                   movies.casts, movies.synopsis,
                   genres.name AS genres FROM movies
                   INNER JOIN moviesGenres ON 
                   movies.id = moviesGenres.movie_id
                   INNER JOIN genres ON
                   genres.id = moviesGenres.genre_id
                   WHERE movies.title LIKE "%${keyword}%"
                   ORDER BY ${by} ${sort}`
      this.db.query(sql, (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length < 1) {
          return resolve({
            status: 200,
            success: true,
            message: 'movies unavailable',
            results: []
          })
        } else {
          const movieGenres = []
          results.forEach((item, index, arr) => {
            movieGenres.push({
              id: item.id,
              genre: item.genres
            })
          })

          let data = results.filter((item, index, array) => {
            console.log(item.id + ' ' + array[index + (index >= array.length - 1 ? 0 : 1)].id)
            return ((item.id !== ((index >= array.length - 1 ? 0 : array[index + 1].id))))
          })

          data = data.map((item, index) => {
            return {
              id: item.id,
              title: item.title,
              poster: `${process.env.URL}/uploads/${item.poster}`,
              releaseDate: item.releaseDate,
              duration: item.duration,
              genres: movieGenres.filter(genreItem => genreItem.id === item.id).map(item => item.genre).join(', ')
            }
          })
          return resolve({
            status: 200,
            success: true,
            message: 'Get all movies successfully',
            results: data
          })
        }
      })
    })
  }

  findAllByGenre (genre, keyword, by, sort) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT movies.id, movies.title,
                   movies.poster, movies.releaseDate,
                   movies.duration, movies.direct,
                   movies.casts, movies.synopsis,
                   genres.name AS genres FROM movies
                   INNER JOIN moviesGenres ON 
                   movies.id = moviesGenres.movie_id
                   INNER JOIN genres ON
                   genres.id = moviesGenres.genre_id
                   WHERE movies.title LIKE "%${keyword}%"
                   AND genres.name = "${genre}"
                   ORDER BY ${by} ${sort}`
      this.db.query(sql, (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length < 1) {
          return resolve({
            status: 200,
            success: true,
            message: 'movies unavailable',
            results: []
          })
        } else {
          const movieGenres = []
          results.forEach((item, index, arr) => {
            movieGenres.push({
              id: item.id,
              genre: item.genres
            })
          })

          let data = results.filter((item, index, array) => {
            console.log(item.id + ' ' + array[index + (index >= array.length - 1 ? 0 : 1)].id)
            return ((item.id !== ((index >= array.length - 1 ? 0 : array[index + 1].id))))
          })

          data = data.map((item, index) => {
            return {
              id: item.id,
              title: item.title,
              poster: `${process.env.URL}/uploads/${item.poster}`,
              releaseDate: item.releaseDate,
              duration: item.duration,
              genres: movieGenres.filter(genreItem => genreItem.id === item.id).map(item => item.genre).join(', ')
            }
          })
          return resolve({
            status: 200,
            success: true,
            message: 'Get all movies successfully',
            results: data
          })
        }
      })
    })
  }

  // findAllById (id) {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'SELECT * FROM movies WHERE id = ?'
  //     this.db.query(sql, [id], (err, results) => {
  //       if (err) {
  //         return reject(err)
  //       } else if (results.length < 1) {
  //         results = results.map(item => {
  //           return {
  //             id: item.id,
  //             title: item.title,
  //             poster: `${process.env.URL}/uploads/${item.poster}`,
  //             releaseDate: item.releaseDate,
  //             duration: item.duration,
  //             direct: item.direct,
  //             casts: item.casts,
  //             synopsis: item.synopsis
  //           }
  //         })
  //         return resolve({
  //           status: 200,
  //           success: false,
  //           message: `MOvie with id ${id} not available`,
  //           results: results
  //         })
  //       } else {
  //         results = results.map(item => {
  //           return {
  //             id: item.id,
  //             title: item.title,
  //             poster: `${process.env.URL}/uploads/${item.poster}`,
  //             releaseDate: item.releaseDate,
  //             duration: item.duration,
  //             direct: item.direct,
  //             casts: item.casts,
  //             synopsis: item.synopsis
  //           }
  //         })
  //         return resolve({
  //           status: 200,
  //           success: true,
  //           message: 'Get all movies successfully',
  //           results: results
  //         })
  //       }
  //     })
  //   })
  // }
  findAllById (id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT movies.id, movies.title,
                   movies.poster, movies.releaseDate,
                   movies.duration, movies.direct,
                   movies.casts, movies.synopsis,
                   genres.name AS genres FROM movies
                   INNER JOIN moviesGenres ON 
                   movies.id = moviesGenres.movie_id
                   INNER JOIN genres ON
                   genres.id = moviesGenres.genre_id
                   WHERE movies.id = ?`
      this.db.query(sql, id, (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length < 1) {
          return resolve({
            status: 200,
            success: true,
            message: 'movies unavailable',
            results: []
          })
        } else {
          const movieGenres = []
          results.forEach((item, index, arr) => {
            movieGenres.push({
              id: item.id,
              genre: item.genres
            })
          })

          let data = results.filter((item, index, array) => {
            console.log(item.id + ' ' + array[index + (index >= array.length - 1 ? 0 : 1)].id)
            return ((item.id !== ((index >= array.length - 1 ? 0 : array[index + 1].id))))
          })

          data = data.map((item, index) => {
            return {
              id: item.id,
              title: item.title,
              poster: `${process.env.URL}/uploads/${item.poster}`,
              releaseDate: item.releaseDate,
              duration: item.duration,
              direct: item.direct,
              casts: item.casts,
              synopsis: item.synopsis,
              genres: movieGenres.filter(genreItem => genreItem.id === item.id).map(item => item.genre).join(', ')
            }
          })
          return resolve({
            status: 200,
            success: true,
            message: 'Get all movies successfully',
            results: data
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

  update (id, poster, { title, releaseDate, duration, direct, casts, synopsis, genreId }) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM movies WHERE id = ?'
      this.db.query(sql, id, (err, results) => {
        if (err) {
          return reject(err)
        } else {
          if (typeof genreId === 'object' || typeof genreId === 'string') {
            this.db.query(`SELECT * FROM genres WHERE id IN (${typeof genreId === 'string' ? genreId : genreId.map(item => item).join()})`, (err, genreResult) => {
              const genresId = []
              if (err) {
                return reject(err)
              } else {
                genreResult.forEach(item => {
                  genresId.push(item)
                })
              }

              if ((genreId.length !== genresId.length && typeof genreId === 'object') || genreResult.length < 1) {
                return resolve({
                  status: 400,
                  success: false,
                  message: 'Unknown genre'
                })
              }

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
                }, id], (err, result) => {
                if (err) {
                  return reject(err)
                } else {
                  if (typeof genreId === 'object') {
                    genreId.forEach((item, index) => {
                      this.db.query('SELECT id FROM moviesGenres WHERE movie_id = ?', Number(id), (err, result) => {
                        if (err) {
                          return reject(err)
                        } else {
                          this.db.query('UPDATE moviesGenres SET ? WHERE movie_id = ? AND id = ?', [{ genre_id: item }, Number(id), result[index].id], err => {
                            if (err) {
                              return reject(err)
                            }
                          })
                        }
                      })
                    })
                  } else {
                    this.db.query('SELECT id FROM moviesGenres WHERE movie_id = ?', Number(id), (err, result) => {
                      if (err) {
                        return reject(err)
                      } else {
                        this.db.query('UPDATE moviesGenres SET ? WHERE movie_id = ? AND id = ?', [{ genre_id: genreId }, Number(id), result[0].id], err => {
                          if (err) {
                            return reject(err)
                          }
                        })
                      }
                    })
                  }
                  return resolve({
                    status: 200,
                    success: true,
                    message: 'New movie has been edited',
                    oldPoster: results[0].poster
                  })
                }
              })
            })
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
              }, id], (err, result) => {
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
        }
      })
    })
  }
}

module.exports = new MovieModel()
