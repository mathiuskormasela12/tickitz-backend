// ===== Transaction Model
// import Database
const Database = require('./Database')

class TransactionModel extends Database {
  constructor (table) {
    super()
    this.table = table
  }

  create (userId, body) {
    const data = {
      showTimeDate: body.showTimeDate,
      ticketTime: body.ticketTime,
      cinemaName: body.cinemaName,
      cinemaPoster: body.cinemaPoster,
      cinemaCity: body.cinemaCity,
      movieTitle: body.movieTitle,
      paymentMethod: body.paymentMethod,
      ticketCount: body.seats.split(',').length,
      totalPayment: body.totalPayment,
      seats: body.seats,
      userId
    }

    const sql = `INSERT INTO ${this.table} SET ?`
    return new Promise((resolve, reject) => {
      this.db.query(sql, data, (err, result) => {
        if (err) {
          return reject(err)
        } else if (result.affectedRow < 1) {
          return resolve(false)
        } else {
          return resolve({
            id: result.insertId
          })
        }
      })
    })
  }

  getShowTimeId (ticketDate) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT id FROM show_times WHERE showTimeDate = ?'
      this.db.query(sql, ticketDate, (err, result) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(result)
        }
      })
    })
  }

  getOrderHistory (userId) {
    const sql = `SELECT id, showTimeDate, movieTitle, ticketTime, cinemaPoster, cinemaName FROM ${this.table} WHERE userId = ?`
    return new Promise((resolve, reject) => {
      this.db.query(sql, userId, (err, result) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(result)
        }
      })
    })
  }

  getOrderHistoryDetail (id, userId) {
    const sql = `SELECT * FROM ${this.table} WHERE userId = ? AND id = ?`
    return new Promise((resolve, reject) => {
      this.db.query(sql, [userId, id], (err, result) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(result)
        }
      })
    })
  }

  delete (id) {
    const sql = `DELETE FROM ${this.table} WHERE id = ?`
    return new Promise((resolve, reject) => {
      this.db.query(sql, [id], (err, result) => {
        if (err) {
          return reject(err)
        } else if (result.affectedRow < 1) {
          return resolve(false)
        } else {
          return resolve(true)
        }
      })
    })
  }
}

module.exports = new TransactionModel('transactions')
