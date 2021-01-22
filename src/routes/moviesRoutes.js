// ===== Movies Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import movie controller
const moviesController = require('../controllers/moviesController')

// import middlewares
const isFormFill = require('../middlewares/isFormFill')
const auth = require('../middlewares/auth')

const isAddMoviesFill = isFormFill(...config.addMovieBody)

// init router
const router = express.Router()

// setup express file upload
router.use(upload(config.uploadOptions))

router.get('/', auth, moviesController.getAll)
router.get('/:id', auth, moviesController.getMovieById)
router.post('/', auth, isAddMoviesFill, moviesController.create)
router.put('/', auth, isAddMoviesFill, moviesController.create)
router.delete('/:id', auth, moviesController.remove)
router.patch('/:id', auth, moviesController.edit)

module.exports = router
