// ===== Ticket Controller
// import all modules
const response = require('../helpers/response')
const pagination = require('../helpers/pagination')

// import all models
const showTimesModel = require('../models/ShowTimeModel')
const soldSeatsModel = require('../models/SoldSeatsModel')

exports.getTicketByMovieId = async (req, res) => {
  const {
    limit = '5',
    search = '',
    by = 'movieId',
    sort = 'ASC',
    showTimeDate,
    location
  } = req.query

  if (limit < 1 || limit.match(/\d/) === null) {
    return response(res, 400, false, 'Bad Request')
  } else if (limit.match(/[0-9]/gi) !== null && limit.match(/[a-z]/gi) !== null) {
    return response(res, 400, false, 'Bad Request')
  }

  if (sort.toLowerCase() !== 'asc' && sort.toLowerCase() !== 'desc') {
    return response(res, 400, false, 'Bad Request')
  }

  try {
    const showTimes = await showTimesModel.getShowTimes(req.params.id, search, by, sort, showTimeDate, location)

    let data = showTimes.sort((a, b) => a.cinemaId - b.cinemaId)
    data = showTimes.filter((item, index, array) => {
      console.log(item.cinema)
      return (item.movieId !== ((index >= array.length - 1 ? 0 : array[index + 1].movieId))) || (item.cinema.toLowerCase() !== ((index >= array.length - 1 ? 0 : array[index + 1].cinema.toLowerCase())))
    })

    const times = []
    showTimes.forEach((item, index, array) => {
      times.push({
        cinemaId: item.cinemaId,
        time: item.time
      })
    })
    data = data.map((item, index) => {
      return {
        ...data[index],
        cinemaPoster: `${process.env.URL}/uploads/${item.cinemaPoster}`,
        time: times.filter(timeItem => timeItem.cinemaId === item.cinemaId).map(item => item.time)
      }
    })

    pagination(data, req.query, limit, 'ticket', (results, prevPageLink, nextPageLink) => {
      return response(res, 200, true, 'Success to get show times', results, prevPageLink, nextPageLink)
    })
  } catch (err) {
    response(res, 500, false, 'Server Error')
    throw new Error(err)
  }
}

exports.getAllSoldSeats = async (req, res) => {
  const {
    showTimeId
  } = req.params

  try {
    let result = await soldSeatsModel.getAll(showTimeId)

    if (result.length < 1) {
      return response(res, 400, false, 'Failed to get all sold seats')
    } else {
      result = result.map(item => item.seatCode)
      return response(res, 200, true, 'Success to get all sold seats', result)
    }
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}

exports.getSelectedShowTimeId = async (req, res) => {
  const {
    showTimeDate,
    timeId,
    cinemaId,
    movieId
  } = req.params

  try {
    const result = await showTimesModel.findAllByCond({
      showTimeDate,
      timeId,
      cinemaId,
      movieId
    })

    if (result.length < 1) {
      return response(res, 400, false, 'Failed to get selected show time')
    } else {
      console.log(result[0].id)
      return response(res, 200, true, 'Success to get selected show time id', {
        showTimeId: result[0].id
      })
    }
  } catch (error) {
    response(res, 500, false, 'Server Error')
    throw new Error(error)
  }
}
