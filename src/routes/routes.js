// ===== Routes
// Import all modules
const express = require('express')

// import all controllers
const moviesController = require('../controllers/moviesController')
const genreController = require('../controllers/genreController')
const cinemaController = require('../controllers/cinemaController')

// import middleware
const isFill = require('../middelwares/isFill')

// init router
const router = express.Router()

const isAddMovieFill = isFill('title', 'year', 'genre', 'type', 'poster', 'writer', 'actors', 'plot')
const isUpdateMovieFill = isFill('id', 'title', 'year', 'genre', 'type', 'poster', 'writer', 'actors', 'plot')
const isAddGenreFill = isFill('name')
const isUpdateGenreFill = isFill('id', 'name')
const isAddCinemaFill = isFill('name', 'address', 'seatCount', 'workHour', 'movieCount', 'yearsActive')
const isUpdateCinemaFill = isFill('name', 'address', 'seatCount', 'workHour', 'movieCount', 'yearsActive')

router.get('/movies', moviesController.getAllMovies)
router.get('/genre/:name', genreController.getMovieByGenreName)
router.get('/movies/:id', moviesController.getMovieDetail)
router.get('/cinemas', cinemaController.getAllCinemas)
router.get('/cinemas/:id', cinemaController.getCinemasDetail)

router.get('/admin/movies', moviesController.getAllMovies)
router.post('/admin/movies', isAddMovieFill, moviesController.addMovie)
router.put('/admin/movies', isUpdateMovieFill, moviesController.updateMovie)
router.patch('/admin/movies/:id', moviesController.updateSeveralMovie)
router.delete('/admin/movies/:id', moviesController.deleteMovie)
router.get('/admin/movies/:id', moviesController.getMovieDetail)
router.get('/admin/genre/:id', genreController.getGenreByGenreId)
router.delete('/admin/genre/:id', genreController.deleteGenre)
router.get('/admin/genre', genreController.getAllGenre)
router.put('/admin/genre', isUpdateGenreFill, genreController.updateGenre)
router.patch('/admin/genre/:id', genreController.updateSeveralGenre)
router.post('/admin/genre', isAddGenreFill, genreController.addGenre)
router.get('/admin/cinemas', cinemaController.getAllCinemas)
router.put('/admin/cinemas', isUpdateCinemaFill, cinemaController.updateCinema)
router.patch('/admin/cinemas/:id', cinemaController.updateSeveralCinema)
router.post('/admin/cinemas', isAddCinemaFill, cinemaController.addCinema)
router.get('/admin/cinemas/:id', cinemaController.getCinemasDetail)
router.delete('/admin/cinemas/:id', cinemaController.deleteCinema)

module.exports = router
