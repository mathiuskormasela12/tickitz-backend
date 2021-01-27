// ===== Tickit Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import ticket
const ticketController = require('../controllers/ticketController')

// import middlewares
const auth = require('../middlewares/auth')

// init router
const router = express.Router()

// setup express file upload
router.use(upload(config.uploadOptions))

router.get('/ticket/:id', auth.isUser, ticketController.getTicketByMovieId)

module.exports = router
