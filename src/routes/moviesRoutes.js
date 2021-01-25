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

router.get('/', auth.isAdmin, moviesController.getAllAdmin)
router.get('/:id', auth.isAdmin, moviesController.getMovieById)
router.post('/', auth.isAdmin, isAddMoviesFill, moviesController.create)
router.put('/', auth.isAdmin, isAddMoviesFill, moviesController.create)
router.delete('/:id', auth.isAdmin, moviesController.remove)
router.patch('/:id', auth.isAdmin, moviesController.edit)

module.exports = router
