// ===== Ticket Controller
// import all modules
const response = require('../helpers/response')
const pagination = require('../helpers/pagination')

// import all models
const showTimesModel = require('../models/ShowTimeModel')

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

    let data = showTimes.filter((item, index, array) => {
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
