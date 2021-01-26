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

  findAllByCond (cond) {
    const sql = `SELECT * FROM ${this.table} WHERE ${Object.keys(cond).map((item, index) => `${item}=${Object.values(cond)[index]}`).join(' AND ')}`
    return new Promise((resolve, reject) => {
      const x = this.db.query(sql, (err, result) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(result)
        }
      })
      console.log('INI DATABASENYA')
      console.log(x.sql)
    })
  }
}

module.exports = new ShowTimeModel('show_times')
