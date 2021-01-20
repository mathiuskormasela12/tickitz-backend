// ===== User Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import movie controller
const moviesController = require('../controllers/moviesController')

// import cinema controller
const cinemaController = require('../controllers/cinemasController')

// init router
const router = express.Router()

// setup express file upload
router.use(upload(config.uploadOptions))

router.get('/movies', moviesController.getAll)
router.get('/movies/:id', moviesController.getMovieById)
router.get('/genre/:genre', moviesController.getAllByGenre)
router.get('/', cinemaController.getAll)
router.get('/:id', cinemaController.getCinemaById)

module.exports = router
