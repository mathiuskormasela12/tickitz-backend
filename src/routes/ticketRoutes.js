// ===== Tickit Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import ticket
const ticketController = require('../controllers/ticketController')

// import middlewares
const isFormFill = require('../middlewares/isFormFill')
const auth = require('../middlewares/auth')

const isAddMoviesFill = isFormFill(...config.addMovieBody)
const isAddTimeFill = isFormFill(...config.addTime)

// init router
const router = express.Router()

// setup express file upload
router.use(upload(config.uploadOptions))

router.get('/ticket', auth, ticketController.getTicketByMovieId)

module.exports = router
