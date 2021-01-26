// ===== Transaction Controller
// import all modules
const response = require('../helpers/response')

// import models
const transactions = require('../models/TransactionModel')
const soldSeats = require('../models/SoldSeatsModel')
const showTimes = require('../models/ShowTimeModel')

exports.buy = async (req, res) => {
  try {
    const isCinemaIdExists = await showTimes.findAllByCond({
      cinemaId: req.body.cinemaId,
      movieId: req.body.movieId
    })
    console.log(isCinemaIdExists)
    if (isCinemaIdExists.length < 1) {
      return response(res, 400, false, 'Unknown cinema id')
    }

    // const isMovieIdExists = await movies.findAllById(req.body.movieId)
    const isMovieIdExists = await showTimes.findAllByCond({
      movieId: req.body.movieId,
      cinemaId: req.body.cinemaId
    })

    if (isMovieIdExists.length < 1) {
      return response(res, 400, false, 'Unknown movie id')
    }

    const isShowTimeIdExists = await showTimes.findAllByCond({
      movieId: req.body.movieId,
      cinemaId: req.body.cinemaId,
      id: req.body.showTimeId
    })

    if (isShowTimeIdExists.length < 1) {
      return response(res, 400, false, 'Unknown show time id')
    }

    const result = await transactions.create(req.data.id, req.body)

    if (!result) {
      return response(res, 400, false, 'Failed to buy ticket')
    } else {
      const soldSeatsList = await soldSeats.getSoldSeatByCondition({
        id: req.body.showTimeId,
        movieId: req.body.movieId,
        cinemaId: req.body.cinemaId
      })

      const isSoldSeatExists = []

      soldSeatsList.forEach(item => {
        if (req.body.seats.includes(item.seatCode.trim())) {
          isSoldSeatExists.push(true)
        } else {
          isSoldSeatExists.push(false)
        }
      })

      if (isSoldSeatExists.indexOf(true) !== -1) {
        const results = await transactions.delete(result.id)

        if (!results) {
          return response(res, 400, false, "Can't remove transaction")
        }
        return response(res, 400, false, "Can't select same seat")
      }

      try {
        const result = await soldSeats.create(req.body.showTimeId, req.body.seats.split(','))
        if (!result) {
          return response(res, 400, false, 'Failed to add sold seat')
        } else {
          return response(res, 200, true, 'Success buy ticket')
        }
      } catch (err) {
        console.log(err)
        return response(res, 500, false, 'Server Error')
      }
    }
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}
