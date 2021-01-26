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
      showTimeId: body.showTimeId,
      timeId: body.timeId,
      cinemaId: body.cinemaId,
      ticketCount: body.ticketCount,
      totalPayment: body.totalPayment,
      paymentMethod: body.paymentMethod,
      seats: body.seats,
      movieId: body.movieId,
      userId
    }
    console.log(data)
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
