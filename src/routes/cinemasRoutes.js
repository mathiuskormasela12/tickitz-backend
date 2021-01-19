// ===== Cinemas Routes
// import all modules
const express = require('express')
const upload = require('express-fileupload')
const config = require('../config/config')

// import genre controller
const cinemaController = require('../controllers/cinemasController')

// import middlewares
const isFormFill = require('../middlewares/isFormFill')

const isAddCinemaFill = isFormFill(...config.addCinemasBody)

// init router
const router = express.Router()

// setup express file upload
router.use(upload(config.uploadOptions))

router.get('/', cinemaController.getAll)
router.get('/:id', cinemaController.getCinemaById)
router.post('/', isAddCinemaFill, cinemaController.create)
router.put('/', isAddCinemaFill, cinemaController.create)
router.delete('/:id', cinemaController.remove)
router.patch('/:id', cinemaController.edit)

module.exports = router
