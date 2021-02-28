// ===== Sold Seat Model
// import Database
const Database = require('./Database')

class SoldSeatsModel extends Database {
  constructor (table) {
    super()
    this.table = table
  }

  create (showTimeId, seats) {
    const sql = `INSERT INTO ${this.table} SET ?`
    return new Promise((resolve, reject) => {
      seats.forEach(item => {
        this.db.query(sql, { showTimeId, seatCode: item.trim() }, (err, result) => {
          if (err) {
            return reject(err)
          } else if (result.affectedRow < 1) {
            return resolve(false)
          } else {
            return resolve(true)
          }
        })
      })
    })
  }

  getAll (showTimeId) {
    const sql = `SELECT DISTINCT soldSeats.seatCode
                 FROM soldSeats WHERE showTimeId = ${showTimeId}
                `
    console.log(sql)
    return new Promise((resolve, reject) => {
      this.db.query(sql, (err, result) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(result)
        }
      })
    })
  }

  getSoldSeatByCondition (condition) {
    const sql = `SELECT ${this.table}.id, ${this.table}.seatCode, ${this.table}.showTimeId, show_times.cinemaId, show_times.movieId FROM ${this.table} INNER JOIN show_times ON ${this.table}.showTimeId = show_times.id WHERE ${Object.keys(condition).map((item, index) => `show_times.${item} = ${Object.values(condition)[index]}`).join(' AND ')}`
    return new Promise((resolve, reject) => {
      this.db.query(sql, (err, result) => {
        if (err) {
          return reject(err)
        } else {
          console.log(sql)
          return resolve(result)
        }
      })
    })
  }
}

module.exports = new SoldSeatsModel('soldSeats')
