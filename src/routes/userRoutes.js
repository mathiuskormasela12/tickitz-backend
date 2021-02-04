// ===== User Routes
// import all modules
const express = require('express')

// import movie controller
const moviesController = require('../controllers/moviesController')

// import cinema controller
const cinemaController = require('../controllers/cinemasController')

// import moviegoers controllers
const moviegoers = require('../controllers/moviegoers')

// import moviegoers middleware
const moviegoersMiddleware = require('../middlewares/moviegoers')

// init router
const router = express.Router()

router.get('/movies', moviesController.getAll)
router.get('/movies/:id', moviesController.getMovieById)
router.get('/genre/:genre', moviesController.getAllByGenre)
router.get('/cinemas', cinemaController.getAll)
router.get('/cinemas/:id', cinemaController.getCinemaById)
router.post('/moviegoers', moviegoersMiddleware, moviegoers)
router.get('/movies/month/:month', moviesController.getAllMovieByMonth)
router.get('/showing', moviesController.getAllMovieNow)
router.get('/times', moviesController.getAllTimes)
router.get('/cities', cinemaController.getAllCities)

module.exports = router
