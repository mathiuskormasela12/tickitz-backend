// ===== Movies Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import movie controller
const movieController = require('../controllers/moviesController')

// import middlewares
const isFormFill = require('../middlewares/isFormFill')

const isAddMovieFill = isFormFill(...config.addMovieBody)

// init router
const router = express.Router()

// setup express file upload
router.use(upload(config.uploadOptions))

router.post('/', isAddMovieFill, movieController.create)

module.exports = router
