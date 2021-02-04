// ===== Cinema Model
// import Database
const Database = require('./Database')

class CinemaModel extends Database {
  create (name, poster, address, pricePerSeat, city) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT name FROM cinemas WHERE name = ?'
      this.db.query(sql, name, (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length > 0) {
          return resolve({
            status: 400,
            success: false,
            message: 'Cinemas has been there'
          })
        } else {
          const sql = 'INSERT INTO cinemas SET ?'
          this.db.query(sql, { name, poster, address, pricePerSeat, city }, (err) => {
            if (err) {
              return reject(err)
            } else {
              return resolve({
                status: 200,
                success: true,
                message: 'New cinema has been created'
              })
            }
          })
        }
      })
    })
  }

  findAll (keyword, by, sort) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM cinemas  
                   WHERE name LIKE "%${keyword}%"
                   ORDER BY ${by} ${sort}`
      this.db.query(sql, (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length < 1) {
          return resolve({
            status: 200,
            success: false,
            message: 'Cinema unavailable',
            results: []
          })
        } else {
          results = results.map(item => {
            return {
              id: item.id,
              name: item.name,
              poster: `${process.env.URL}/uploads/${item.poster}`
            }
          })
          return resolve({
            status: 200,
            success: true,
            message: 'Get all cinema successfully',
            results: results
          })
        }
      })
    })
  }

  getCities () {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT DISTINCT city FROM cinemas'
      this.db.query(sql, (err, results) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(results)
        }
      })
    })
  }

  findAllById (id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM cinemas WHERE id = ?'
      this.db.query(sql, [id], (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length < 1) {
          return resolve({
            status: 200,
            success: false,
            message: `Cinema with id ${id} not available`,
            results: results
          })
        } else {
          results = results.map(item => {
            return {
              id: item.id,
              name: item.name,
              poster: `${process.env.URL}/uploads/${item.poster}`,
              address: item.address,
              pricePerSeat: item.pricePerSeat,
              city: item.city
            }
          })
          return resolve({
            status: 200,
            success: true,
            message: 'Get all cinemas successfully',
            results: results
          })
        }
      })
    })
  }

  destroy (id) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT name, poster FROM cinemas WHERE id = ?'
      this.db.query(sql, id, (err, results) => {
        if (err) {
          return reject(err)
        } else if (results.length < 1) {
          return resolve({
            status: 400,
            success: false,
            message: 'Unknown cinema'
          })
        } else {
          const sql = 'DELETE FROM cinemas WHERE id = ?'
          this.db.query(sql, [id], (err) => {
            if (err) {
              return reject(err)
            } else {
              return resolve({
                status: 200,
                success: true,
                message: 'Cinema has been deleted',
                poster: results[0].poster
              })
            }
          })
        }
      })
    })
  }

  update (id, poster, { name, address, pricePerSeat, city }) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM cinemas WHERE id = ?'
      this.db.query(sql, id, (err, results) => {
        if (err) {
          return reject(err)
        } else {
          const sql = 'UPDATE cinemas SET ? WHERE id = ?'

          this.db.query(sql, [
            {
              name: name || results[0].name,
              poster: poster || results[0].poster,
              address: address || results[0].address,
              pricePerSeat: pricePerSeat || results[0].pricePerSeat,
              city: city || results[0].city
            }, id], (err) => {
            if (err) {
              return reject(err)
            } else {
              return resolve({
                status: 200,
                success: true,
                message: 'New cinema has been edited',
                oldPoster: results[0].poster
              })
            }
          })
        }
      })
    })
  }
}

module.exports = new CinemaModel()
