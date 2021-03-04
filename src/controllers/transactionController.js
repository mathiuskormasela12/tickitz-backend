// ===== Transaction Controller
// import all modules
const response = require('../helpers/response')
const moment = require('moment')

// import models
const transactions = require('../models/TransactionModel')
const soldSeats = require('../models/SoldSeatsModel')
const showTimes = require('../models/ShowTimeModel')

exports.buy = async (req, res) => {
  try {
    const isMovieIdExists = await showTimes.findAllByCond({
      movieId: req.body.movieId
    })

    if (isMovieIdExists.length < 1) {
      return response(res, 400, false, 'Unknown movie id')
    }

    const isCinemaIdExists = await showTimes.findAllByCond({
      cinemaId: req.body.cinemaId
    })

    if (isCinemaIdExists.length < 1) {
      return response(res, 400, false, 'Unknown cinema id')
    }

    const isShowTimeIdExists = await showTimes.findAllByCond({
      id: req.body.showTimeId
    })

    if (isShowTimeIdExists.length < 1) {
      return response(res, 400, false, 'Unknown show time id')
    }

    const isTimeIdExists = await showTimes.findAllByCond({
      timeId: req.body.timeId
    })

    if (isTimeIdExists.length < 1) {
      return response(res, 400, false, 'Unknown time id')
    }

    const isTicketExists = await showTimes.findAllByCond({
      movieId: req.body.movieId,
      cinemaId: req.body.cinemaId,
      id: req.body.showTimeId,
      timeId: req.body.timeId
    })

    if (isTicketExists.length < 1) {
      return response(res, 400, false, 'Unknown ticket')
    }

    const result = await transactions.create(req.data.id, req.body)
    const transactionId = result.id

    if (!result) {
      return response(res, 400, false, 'Failed to buy ticket')
    } else {
      try {
        const result = await soldSeats.create(req.body.showTimeId, req.body.seats.split(','))
        if (!result) {
          return response(res, 400, false, 'Failed to add sold seat')
        } else {
          return response(res, 200, true, 'Success buy ticket', {
            transactionId
          })
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

exports.getUserOrderHistory = async (req, res) => {
  try {
    const results = await transactions.getOrderHistory(req.data.id)

    if (results.length < 1) {
      return response(res, 400, false, 'Empty order history', results)
    } else {
      const orderHistory = results.map((item, index, array) => {
        return {
          ...array[index],
          showTimeDate: moment(item.showTimeDate).format('DD MMMM YYYY'),
          cinemaPoster: process.env.URL.concat('/uploads/', item.cinemaPoster)
        }
      })
      return response(res, 200, true, 'Get Order History Successfully', orderHistory)
    }
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}

exports.getUserOrderHistoryDetail = async (req, res) => {
  try {
    const results = await transactions.getOrderHistoryDetail(req.params.id, req.data.id)

    if (results.length < 1) {
      return response(res, 400, false, 'Empty order history', results)
    } else {
      const orderHistory = {
        ...results[0],
        showTimeDate: moment(results[0].showTimeDate).format('DD MMMM YYYY'),
        cinemaPoster: process.env.URL.concat('/uploads/', results[0].cinemaPoster)
      }
      return response(res, 200, true, 'Get Order History Successfully', orderHistory)
    }
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}
