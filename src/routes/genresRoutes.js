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

router.get('/', auth, genreController.getAll)
router.get('/:id', auth, genreController.getGenreById)
router.post('/', auth, isAddMovieFill, genreController.create)
router.put('/', auth, isAddMovieFill, genreController.create)
router.delete('/:id', auth, genreController.remove)
router.patch('/:id', auth, genreController.edit)

module.exports = router
