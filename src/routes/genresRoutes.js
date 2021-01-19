// ===== Genres Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import genre controller
const genreController = require('../controllers/genresController')

// import middlewares
const isFormFill = require('../middlewares/isFormFill')

const isAddMovieFill = isFormFill(...config.addGenreBody)

// init router
const router = express.Router()

// setup express file upload
router.use(upload(config.uploadOptions))

router.get('/', genreController.getAll)
router.get('/:id', genreController.getGenreById)
router.post('/', isAddMovieFill, genreController.create)
router.put('/', isAddMovieFill, genreController.create)
router.delete('/:id', genreController.remove)
router.patch('/:id', genreController.edit)

module.exports = router
