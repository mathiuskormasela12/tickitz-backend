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

      if (role === 'admin') {
        body.activated = true
      } else {
        body.activated = false
      }

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

  update (id, email, body) {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE ${this.table} SET ? WHERE id = ? AND email = ?`
      const b = this.db.query(sql, [body, id, email], (err, result) => {
        if (err) {
          return reject(err)
        } else if (result.affectedRows < 1) {
          resolve(false)
        } else {
          resolve(true)
        }
      })
      console.log(b.sql)
    })
  }

  updatePhoto (id, body) {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE ${this.table} SET ? WHERE id = ?`
      const b = this.db.query(sql, [body, id], (err, result) => {
        if (err) {
          return reject(err)
        } else if (result.affectedRows < 1) {
          resolve(false)
        } else {
          resolve(true)
        }
      })
      console.log(b.sql)
    })
  }

  getUserByCondition (data) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM ${this.table} WHERE ${Object.keys(data).map((item, index) => `${item} = '${Object.values(data)[index]}'`).join(' AND ')}`

      this.db.query(sql, (err, result) => {
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
