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

  getSoldSeatByCondition (condition) {
    const sql = `SELECT * FROM ${this.table} WHERE ${Object.keys(condition).map((item, index) => `${item} = ${Object.values(condition)[index]}`).join(' AND ')}`
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
}

module.exports = new SoldSeatsModel('soldSeats')
