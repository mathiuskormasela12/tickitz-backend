// ===== User Model
// import Database
const Database = require('./Database')

class UserModel extends Database {
  constructor (table) {
    super()
    this.table = table
  }

  create (email, password, role) {
    return new Promise((resolve, reject) => {
      const body = { email, password, role }
      const sql = `INSERT INTO ${this.table} SET ?`

      this.db.query(sql, body, (err, result) => {
        if (err) {
          return reject(err)
        } else if (result.affectedRows < 1) {
          resolve(false)
        } else {
          resolve({
            id: result.insertId,
            email: body.email,
            password: body.password
          })
        }
      })
    })
  }

  getUserByEmail (email) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM ${this.table} WHERE email = ?`

      this.db.query(sql, [email], (err, result) => {
        if (err) {
          return reject(err)
        } else if (result.length < 1) {
          resolve(false)
        } else {
          resolve(result)
        }
      })
    })
  }
}

module.exports = new UserModel('users')
