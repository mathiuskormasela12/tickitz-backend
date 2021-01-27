// ===== Genre Model
// import Database
const Database = require('./Database')

class GenreModel extends Database {
  create (name) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT name FROM genres WHERE name = ?'
      this.db.query(sql, name, (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length > 0) {
          return resolve({
            status: 400,
            success: false,
            message: 'Genre has been there'
          })
        } else {
          const sql = 'INSERT INTO genres SET ?'
          this.db.query(sql, { name }, (err) => {
            if (err) {
              return reject(err)
            } else {
              return resolve({
                status: 200,
                success: true,
                message: 'New genre has been created'
              })
            }
          })
        }
      })
    })
  }

  findAll (keyword, by, sort) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM genres  
                   WHERE name LIKE "%${keyword}%"
                   ORDER BY ${by} ${sort}`
      this.db.query(sql, (err, results) => {
        if (err) {
          return reject(err)
        } else {
          return resolve({
            status: 200,
            success: true,
            message: 'Get all genres successfully',
            results: results
          })
        }
      })
    })
  }

  findAllById (id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM genres WHERE id = ?'
      this.db.query(sql, [id], (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length < 1) {
          return resolve({
            status: 200,
            success: false,
            message: `Genre with id ${id} not available`,
            results: results
          })
        } else {
          return resolve({
            status: 200,
            success: true,
            message: 'Get all genres successfully',
            results: results
          })
        }
      })
    })
  }

  destroy (id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT name FROM genres WHERE id = ?'
      this.db.query(sql, id, (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length < 1) {
          return resolve({
            status: 400,
            success: false,
            message: 'Unknown Genre'
          })
        } else {
          const sql = 'DELETE FROM genres WHERE id = ?'
          this.db.query(sql, [id], (err) => {
            if (err) {
              return reject(err)
            } else {
              return resolve({
                status: 200,
                success: true,
                message: 'Genre has been deleted'
              })
            }
          })
        }
      })
    })
  }

  update (id, name) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT name FROM genres WHERE id = ?'
      this.db.query(sql, id, (err, results) => {
        if (err) {
          return reject(err)
        } else {
          const sql = 'UPDATE genres SET ? WHERE id = ?'

          this.db.query(sql, [{ name: name || results[0].name }, id], (err) => {
            if (err) {
              return reject(err)
            } else {
              return resolve({
                status: 200,
                success: true,
                message: 'New genre has been edited'
              })
            }
          })
        }
      })
    })
  }
}

module.exports = new GenreModel()
