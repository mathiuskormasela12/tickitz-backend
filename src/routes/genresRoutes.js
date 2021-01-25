// ===== Genres Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import genre controller
const genreController = require('../controllers/genresController')

// import middlewares
const isFormFill = require('../middlewares/isFormFill')
const auth = require('../middlewares/auth')

const isAddMovieFill = isFormFill(...config.addGenreBody)

// init router
const router = express.Router()

// setup express file upload
router.use(upload(config.uploadOptions))

router.get('/', auth.isAdmin, genreController.getAll)
router.get('/:id', auth.isAdmin, genreController.getGenreById)
router.post('/', auth.isAdmin, isAddMovieFill, genreController.create)
router.put('/', auth.isAdmin, isAddMovieFill, genreController.create)
router.delete('/:id', auth.isAdmin, genreController.remove)
router.patch('/:id', auth.isAdmin, genreController.edit)

module.exports = router
