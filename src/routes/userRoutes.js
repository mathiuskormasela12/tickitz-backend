// ===== User Routes
// import all modules
const express = require('express')

// import movie controller
const moviesController = require('../controllers/moviesController')

// import cinema controller
const cinemaController = require('../controllers/cinemasController')

// init router
const router = express.Router()

router.get('/movies', moviesController.getAll)
router.get('/movies/:id', moviesController.getMovieById)
router.get('/genre/:genre', moviesController.getAllByGenre)
router.get('/cinemas', cinemaController.getAll)
router.get('/:id', cinemaController.getCinemaById)

module.exports = router
