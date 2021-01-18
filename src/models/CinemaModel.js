// ===== Cinema Model
// Import all modules
const cinemas = require('./cinemas')

class CinemasModel {
  getAllCinemas () {
    return cinemas.map(item => {
      return {
        id: item.id,
        name: item.name,
        address: item.addres,
        seatCount: item.seatCount
      }
    })
  }

  getCinemasDetail (id) {
    return cinemas.filter(cinemas => cinemas.id === Number(id))
  }

  addCinema ({ name, address, seatCount, workHour, movieCount, yearsActive }) {
    cinemas.push({
      id: cinemas.length + 1,
      name,
      addres: address,
      seatCount,
      workHour,
      movieCount,
      yearsActive
    })
    console.log(cinemas)
    return true
  }

  deleteCinema (id) {
    cinemas.forEach((item, index) => {
      if (item.id === Number(id)) {
        cinemas.splice(index, 1)
      }
    })

    return true
  }

  updateCinema ({ id, name, seatCount, workHour, yearsActive, address, movieCount }) {
    cinemas.forEach((item, index) => {
      if (item.id === Number(id)) {
        item.name = name
        item.seatCount = seatCount
        item.workHour = workHour
        item.yearsActive = yearsActive
        item.addres = address
        item.movieCount = movieCount
      }
    })
    return true
  }

  updateSeveralCinema (id, { name, seatCount, workHour, yearsActive, address, movieCount }) {
    cinemas.forEach((item, index) => {
      if (item.id === Number(id)) {
        item.name = name || item.name
        item.seatCount = seatCount || item.seatCount
        item.workHour = workHour || item.workHour
        item.yearsActive = yearsActive || item.yearsActive
        item.addres = address || item.addres
        item.movieCount = movieCount || item.movieCount
      }
    })
    return true
  }
}

module.exports = new CinemasModel()
