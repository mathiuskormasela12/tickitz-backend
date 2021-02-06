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
    const sql = `SELECT * FROM ${this.table} WHERE ${Object.keys(cond).map((item, index) => `${item}='${Object.values(cond)[index]}'`).join(' AND ')}`
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

  getShowTimes (id, keyword, by, sort, showTimeDate, location) {
    const sql = `SELECT m.id AS movieId, m.title AS movieTitle, m.category, c.city, st.id AS showTimeId, st.showTimeDate, c.pricePerSeat, c.address, c.poster AS cinemaPoster, c.id AS cinemaId, c.name AS cinema, t.showTime AS time FROM cinemas c 
    INNER JOIN show_times st ON c.id = st.cinemaId 
    INNER JOIN times t ON st.timeId = t.id 
    INNER JOIN movies m ON st.movieId = m.id
    WHERE m.id = ? AND c.name LIKE "%${keyword}%"
    ${location ? `AND c.city = '${location}'` : ''} ${showTimeDate ? `AND st.showTimeDate = '${showTimeDate}'` : ''} 
    ORDER BY ${by} ${sort}`

    return new Promise((resolve, reject) => {
      const s = this.db.query(sql, id, (err, results) => {
        if (err) {
          return reject(err)
        } else {
          return resolve(results)
        }
      })
      console.log(s.sql)
    })
  }
}

module.exports = new ShowTimeModel('show_times')
