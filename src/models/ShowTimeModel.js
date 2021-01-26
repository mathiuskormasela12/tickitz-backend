// ===== Show Time Model
// import Database
const Database = require('./Database')

class ShowTimeModel extends Database {
  constructor (table) {
    super()
    this.table = table
  }

  create (data) {
    const sql = `INSERT INTO ${this.table} SET ?`
    return new Promise((resolve, reject) => {
      this.db.query(sql, data, (err, result) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(result)
        }
      })
    })
  }
}

module.exports = new ShowTimeModel('show_times')
