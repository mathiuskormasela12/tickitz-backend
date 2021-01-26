// ===== Moviegoers Model
// import Database
const Database = require('./Database')

class Moviegoers extends Database {
  constructor (table) {
    super()
    this.table = table
  }

  getAll () {
    const sql = `SELECT email FROM ${this.table}`
    return new Promise((resolve, reject) => {
      this.db.query(sql, (err, results) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(results)
        }
      })
    })
  }

  getMovieGoersByEmail (email) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM ${this.table} WHERE email = ?`
      this.db.query(sql, email, (err, result) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(result)
        }
      })
    })
  }

  create (email) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO ${this.table} SET ?`
      this.db.query(sql, { email }, (err, result) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(result)
        }
      })
    })
  }
}

module.exports = new Moviegoers('moviegoers')
