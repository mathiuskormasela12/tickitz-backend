// ===== Movies Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import movie controller
const moviesController = require('../controllers/moviesController')

// import middlewares
const isFormFill = require('../middlewares/isFormFill')

const isAddMoviesFill = isFormFill(...config.addMovieBody)

// init router
const router = express.Router()

// setup express file upload
router.use(upload(config.uploadOptions))

router.get('/', moviesController.getAll)
router.get('/:id', moviesController.getMovieById)
router.post('/', isAddMoviesFill, moviesController.create)
router.put('/', isAddMoviesFill, moviesController.create)
router.delete('/:id', moviesController.remove)
router.patch('/:id', moviesController.edit)

module.exports = router
