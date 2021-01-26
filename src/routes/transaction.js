// ===== Transaction Routes
// import all modules
const express = require('express')
const config = require('../config/config')

// import all controllers
const transaction = require('../controllers/transactionController')

// import all middlewares
const auth = require('../middlewares/auth')
const isFormFill = require('../middlewares/isFormFill')
const isTransactionFill = isFormFill(...config.transaction)

// init router
const router = express.Router()

router.post('/', auth.isUser, isTransactionFill, transaction.buy)
router.get('/history', auth.isUser, transaction.getUserOrderHistory)
router.get('/history/:id', auth.isUser, transaction.getUserOrderHistoryDetail)

module.exports = router
