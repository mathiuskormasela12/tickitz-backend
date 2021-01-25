// ===== Transaction Controller
// import all modules
const response = require('../helpers/response')

// import models
const transactions = require('../models/TransactionModel')
const soldSeats = require('../models/SoldSeatsModel')

exports.buy = async (req, res) => {
  try {
    const result = await transactions.create(req.data.id, req.body)

    if (!result) {
      return response(res, 400, false, 'Failed to buy ticket')
    } else {
      const showTimeId = await transactions.getShowTimeId(req.body.ticketDate)
      const soldSeatsList = await soldSeats.getSoldSeatByCondition({
        showTimeId: showTimeId[0].id
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

      if (showTimeId.length < 1) {
        return response(res, 400, false, 'Unknown show times id')
      } else {
        try {
          const result = await soldSeats.create(showTimeId[0].id, req.body.seats.split(','))
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
    }
  } catch (err) {
    console.log(err)
    return response(res, 500, false, 'Server Error')
  }
}
